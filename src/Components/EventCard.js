import React, { useContext} from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import Images from "../images.js"
import SubmitButton from './SubmitButton';
import './styles/EventCard.css';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

// TODO: handle join vs not join state

const EventCard = (props) => {
    let btnMsg = props.isTemplate ? "MAKE EVENT":"JOIN";
    let attendeesMsg = props.attendees ? (props.attendees + "/" + props.maxAttendees):""; 
    let eventCardClass = "event-card " + props.location;
    const { user, token, eventsList } = useContext(UserContext).userData;
    const { eventId } = props;

    const getImgSrcForType = type => {
        if (!type){
            return Images.events.coffee
        } else if (type.includes("/")){
            return type;
        }

        type = type.toUpperCase();

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

    const handleJoinClick = e => {
        let redirectPath = `/events/${eventId}`;
        let params = { eventId };
    
        // redirect to eventdetails if user already joined
        if (eventsList && eventsList.includes(eventId)) {
            return new Promise( (resolve, reject) => {
                resolve({redirectPath, params});
            })
        }

        return new Promise((resolve, reject) => {
            axios.put(`http://localhost:8080/events/${eventId}/user`, {
                token: token, 
                firstName: user.firstName, 
                lastName: user.lastName, 
                isAdd: true
            })
            .then(res => {
                if(res.status == 200) {
                    console.log("EVENT DETAILS");
                    console.log(props.eventDetails);
                    resolve({redirectPath, params});
                }
            })
        });
    }

    return (
        <MDBRow className={eventCardClass}>
            <MDBCol size="3">
                <img className="img-fluid" src={getImgSrcForType(props.type)} alt="event-icon"></img>
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
                <SubmitButton
                    className="eventcard-btn"
                    text={btnMsg}
                    handleAPICall={handleJoinClick}
                />
            </MDBCol>
        </MDBRow>
    );
  }
  
  export default EventCard