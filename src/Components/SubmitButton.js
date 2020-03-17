import { useHistory } from "react-router-dom";
import React from 'react';
import {MDBBtn} from "mdbreact";
import axios from "axios";

const SubmitButton = (props) => {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    let type = props.type;
    let path = "";
    if(type == "landingPage") {
      path = `/users/exists?email=${props.email}`;
    }
    axios.get(`http://localhost:8080${path}`)
    .then((res) => {
        if (res.status == 200) {
            console.log(res);
            let redirectPath = "";
            if(type == "landingPage" && !res.data.exists) {
              redirectPath = "/signup";
            }
            else if (type == "landingPage" && res.data.exists) {
              redirectPath = "/login"
            }
            history.push({pathname: redirectPath, email: props.email})
        }
    })
  }

  return (
    <MDBBtn id={props.id} type="submit" onClick={handleClick}>
      {props.text}
    </MDBBtn>
  );
}

export default SubmitButton