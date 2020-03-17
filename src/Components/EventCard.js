import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './styles/EventCard.css'

const EventCard = (props) => {
    let btnMsg = props.sample ? "MAKE EVENT":"JOIN";
    return (
        <div className="event-card">
            <img src="event-icon.PNG"></img>
            <div className="event-card-right">
                <div id="event-card-description">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <MDBBtn id="make-event-btn">{btnMsg}</MDBBtn>
            </div>

        </div>
    );
  }
  
  export default EventCard