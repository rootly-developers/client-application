import { useHistory } from "react-router-dom";
import React from 'react';
import {MDBBtn} from "mdbreact";
import axios from "axios";

const SignInBtn = (props) => {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    axios({
      method: 'get',
      url: "http://localhost:8080/users/verify",
      headers: {
        'Content-Type': 'application/json',
        'email': props.email,
        'password': props.password
      },
    })
    .then((res) => {
      if (res.status == 200) {
        if (res.data.isVerified) {
          history.push({pathname: "/events"});
        } else {
          history.push({pathname: '/verify', email: props.email});
        }
      }
    })
  }

  return (
    <MDBBtn id="signin-btn" type="submit" onClick={handleClick}>
      Go! 
    </MDBBtn>
  );
}

export default SignInBtn