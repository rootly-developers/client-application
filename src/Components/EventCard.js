import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './styles/EventCard.css'

const EventCard = (props) => {
    let btnMsg = props.sample ? "MAKE EVENT":"JOIN";
    let attendeesMsg = props.attendees ? (props.attendees + "/" + props.maxAttendees):""; 
    let eventCardClass = "event-card " + props.location;
    
    function getImgSrcForType(type) {
        switch(type) {
            case "ADVENTURE":
                return '/images/events/adventure.png';
            case "COFFEE":
                return '/images/events/coffee.png';
            case "GAMES":
                return '/images/events/games.png';
            case "IDEAS":
                return '/images/events/ideas.png';
            case "SPORTS":
                return '/images/events/sports.png';    
            case "THEATRE":
                return '/images/events/theatre.png';
            default:
                return '/images/events/coffee.png';
        }
    }
    
    return (
        <MDBRow className={eventCardClass}>
            <MDBCol size="3">
                <img className="img-fluid" src={getImgSrcForType(props.src)}></img>
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