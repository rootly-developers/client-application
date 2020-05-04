import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Images from "../images.js"
import './styles/EventCard.css'

const EventCard = (props) => {
    let btnMsg = props.sample ? "MAKE EVENT":"JOIN";
    let attendeesMsg = props.attendees ? (props.attendees + "/" + props.maxAttendees):""; 
    let eventCardClass = "event-card " + props.location;

    function getImgSrcForType(type) {
        switch(type) {
            case "ADVENTURE":
                return Images.events.adventure;
            case "COFFEE":
                return  Images.events.coffee;
            case "GAMES":
                return Images.events.games;
            case "IDEAS":
                return Images.events.ideas;
            case "SPORTS":
                return Images.events.sports;    
            case "THEATRE":
                return Images.events.theatre;
            default:
                return Images.events.coffee;
        }
    }

    return (
        <MDBRow className={eventCardClass}>
            <MDBCol size="3">
                <img className="img-fluid" src={getImgSrcForType(props.type)}></img>
            </MDBCol>
            
            <MDBCol size="5" className="eventcard-content-col">
                <div className="eventcard-content">
                    <h4 className="eventcard-title">{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </MDBCol>

            <MDBCol size="1" className="eventcard-attendees-col">
                <h4>{attendeesMsg}</h4>
            </MDBCol>

            <MDBCol size="3" className="eventcard-btn-col">
                <MDBBtn id="make-event-btn" className="eventcard-btn">{btnMsg}</MDBBtn>
            </MDBCol>
        </MDBRow>
    );
  }
  
  export default EventCard