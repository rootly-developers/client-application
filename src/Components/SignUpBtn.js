import { useHistory } from "react-router-dom";
import React from 'react';
import {MDBBtn} from "mdbreact";
import axios from "axios";

const SignUpBtn = (props) => {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    axios.post(`http://localhost:8080/signup`, {
        email: props.email, password: props.password
    })
    .then((res) => {
        console.log(res);
        if (res.status === 200) {
          axios.post(`http://localhost:8080/users`, {
            firstName: props.email, lastName: props.password, city: props.city
          })
          .then((res) => {
              console.log(res);
              if (res.status == 200) {
                  history.push({pathname: "/verify", email: props.email})
              }
          })
        }
    })
  }

  return (
    <MDBBtn id={props.id} type="submit" onClick={handleClick}>
      {props.text}
    </MDBBtn>
  );
}

export default SignUpBtn