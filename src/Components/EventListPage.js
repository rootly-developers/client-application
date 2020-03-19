import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import EventCard from './EventCard.js'
import './styles/EventListPage.css'

class EventListPage extends Component {
    constructor(){
        super();
        this.state = {
            events: [
                {
                    "id": 2,
                    "organizerid": "yewrNHUjMTa7IAfbXsObfQJOzJB3",
                    "status": "ACTIVE",
                    "title": "San Francisco",
                    "description": "Co-op hangout at SF",
                    "address": "Splunk @ SF",
                    "city": "boston",
                    "starttime": "+158365-11-11T08:00:00.000Z",
                    "endtime": "+158375-11-11T08:00:00.000Z",
                    "attendees": 4,
                    "maxattendees": 9,
                    "created": "2020-03-16T03:12:20.337Z",
                    "lastupdated": "2020-03-16T03:12:20.337Z"
                },
                {
                    "id": 1,
                    "organizerid": "yewrNHUjMTa7IAfbXsObfQJOzJB3",
                    "status": "ACTIVE",
                    "title": "Board Games Night!",
                    "description": "Avalon at Games on Tap",
                    "address": "Google @ SF",
                    "city": "boston",
                    "starttime": "+158365-11-11T08:00:00.000Z",
                    "endtime": "+158375-11-11T08:00:00.000Z",
                    "attendees": 7,
                    "maxattendees": 9,
                    "created": "2020-03-16T03:11:52.198Z",
                    "lastupdated": "2020-03-16T03:11:52.198Z"
                }
            ]        
        }
    }
    render() {
        const events = this.state.events;
        let eventCards = events.map(events => {
            return <MDBRow>
                        <MDBCol size="12">
                            <EventCard title={events.title} description={events.description} 
                                       attendees={events.attendees} maxAttendees={events.maxattendees}
                            />
                        </MDBCol>
                    </MDBRow>
        });
        return(
            <div id="eventlist-page">
                <div id="fill"></div>
                <MDBContainer id="eventlist-container">
                    <h1>Seattle</h1>
                    <div id="eventlist-body">
                        <MDBRow>
                            <MDBCol size="12">
                                <div id="eventlist-toolbar">
                                    <h4>Change Region</h4>
                                    <div id="eventlist-right-btns">
                                        <h4>Newest</h4>
                                        <h4>Upcoming</h4>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="12">
                                <EventCard title="Rockclimbing at Phil's" description="No one has made this event yet...It could be you!" sample={true}/>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="12">
                                <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!" sample={true}/>
                            </MDBCol>
                        </MDBRow>

                        { eventCards }
                    </div>
                </MDBContainer>
            </div>
        );
    }
}

export default EventListPage