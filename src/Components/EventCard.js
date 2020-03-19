import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './styles/EventCard.css'

const EventCard = (props) => {
    let btnMsg = props.sample ? "MAKE EVENT":"JOIN";
    let attendeesMsg = props.attendees ? (props.attendees + "/" + props.maxAttendees):""; 
    return (
        <MDBRow className="event-card">
            <MDBCol size="3">
                <img src="event-icon.PNG"></img>
            </MDBCol>

            <MDBCol size="5" className="eventcard-content-col">
                <div className="eventcard-content">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </MDBCol>

            <MDBCol size="1" className="eventcard-attendees-col">
                <p>{attendeesMsg}</p>
            </MDBCol>

            <MDBCol size="3" className="eventcard-btn-col">
                <MDBBtn id="make-event-btn" className="eventcard-btn">{btnMsg}</MDBBtn>
            </MDBCol>
        </MDBRow>
        // <div className="event-card">
        //     <img src="event-icon.PNG"></img>
        //     <div className="event-card-right">
        //         <div id="event-card-description">
        //             <h4>{props.title}</h4>
        //             <p>{props.description}</p>
        //         </div>
        //         <p>{props.attendees}/{props.maxAttendees}</p>
        //         <MDBBtn id="make-event-btn">{btnMsg}</MDBBtn>
        //     </div>
        // </div>
    );
  }
  
  export default EventCard