import { useHistory } from "react-router-dom";
import React, { useEffect } from 'react';
import {MDBBtn} from "mdbreact";
import axios from "axios";

const SubmitButton = (props) => {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    props.handleAPICall().then((res) => {
      history.push({pathname: res.redirectPath, ...res.params} );
    })
  }

  return (
    <MDBBtn id={props.id} type="submit" onClick={handleClick}>
      {props.text}
    </MDBBtn>
  );
}

export default SubmitButton