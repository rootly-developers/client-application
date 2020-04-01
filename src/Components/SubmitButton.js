import { useHistory } from "react-router-dom";
import React from 'react';
import {MDBBtn} from "mdbreact";

const SubmitButton = (props) => {
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
<<<<<<< HEAD
    props.handleAPICall().then((res) => {
      history.push({pathname: res.redirectPath, ...res.params} );
    })
=======
    let type = props.type;
    let path = "";
    let redirectPath = "";
    if(type == "landingPage") {
      axios.get(`http://localhost:8080/users/exists?email=${props.email}`)
      .then((res) => {
          if (res.status == 200) {
              console.log(res);
              if(!res.data.exists) {
                redirectPath = "/signup";
              }
              else { 
                redirectPath = "/login"
              }
              history.push({pathname: redirectPath, email: props.email})
          }
      })
    }
    else if (type=="createEvent") {
        axios.post('http://localhost:8080/events', {
            eventName: props.eventName,
            exDescription: props.exDescription,
            inDescription: props.inDescription,
            address: props.address,
            city: props.city,
            link: props.link
            // TODO: this should have more data but not sure what to do yet for elements that exist only in mdb pro (select/datepicker/timepicker)
        })
        .then((res) => {
          console.log(res)
          if (res.status == 200) {
            console.log(res);
            redirectPath = "/" + res.eventData;
            history.push({pathname: redirectPath})
        }
        })
      // TODO: redirect to newly created event page but this api call doesn't exist yet
    }
>>>>>>> add id so user redirects to event after creation, params passed as props to submitbutton.js
  }

  return (
    <MDBBtn id={props.id} className={props.className} type="submit" onClick={handleClick}>
      {props.text}
    </MDBBtn>
  );
}

export default SubmitButton