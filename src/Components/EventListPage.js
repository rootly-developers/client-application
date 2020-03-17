import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import EventCard from './EventCard.js'
import './styles/EventListPage.css'

class EventListPage extends Component {
    constructor(){
        super();
    }
    render() {
        return(
            <div id="eventlist-page">
                <MDBContainer id="eventlist-container">
                    <h1>Seattle</h1>
                    <div id="eventlist-body">
                        <EventCard title="Rockclimbing at Phil's" description="No one has made this event yet...It could be you!"/>
                        <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!"/>
                    </div>
                </MDBContainer>
            </div>
        );
    }
}

export default EventListPage