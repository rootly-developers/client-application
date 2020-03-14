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
    else if(type == "signup") {
      path = '`/signup?email=${props.email}`';
    }
    // let { email, password } = props;
    // console.log(email);
    axios.get(`http://localhost:8080${path}`)
    .then((res) => {
        if (res.status == 200) {
            console.log(res);
            let redirectPath = "";
            if(type == "landingPage" && res.exists) {
              redirectPath = "/signup";
            }
            else if (type == "signup") {
              redirectPath = '/verify';
            }
            history.push({pathname: '/verify', email: "mickey@uwaterloo.ca"})
            // history.push({pathname: '/login', isVerified: true});
        }
    })
  }

  return (
    <MDBBtn id={props.id} type="submit" onClick={handleClick}>
      Go!
    </MDBBtn>
  );
}

export default SubmitButton