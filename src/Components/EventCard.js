import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './styles/EventCard.css'

const EventCard = (props) => {
    return (
        <MDBRow>
            <MDBCol size="12">
                <div className="event-card">
                    <img src="event-icon.PNG"></img>
                    <div id="event-card-description">
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                    </div>
                    <MDBBtn id="make-event-btn">MAKE EVENT</MDBBtn>
                </div>
            </MDBCol>
        </MDBRow>
    );
  }
  
  export default EventCard