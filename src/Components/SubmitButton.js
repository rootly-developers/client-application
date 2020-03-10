import { useHistory } from "react-router-dom";
import React from 'react';
import axios from "axios";

const SubmitButton = (props) => {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/signup', {
        email: props.email,
        password: props.password
    })
    .then((res) => {
        if (res.status == 200) {
            console.log(res);
            history.push({pathname: '/login', isVerified: true});
        }
    })
  }

  return (
    <button type="submit" onClick={handleClick}>
      Submit
    </button>
  );
}

export default SubmitButton