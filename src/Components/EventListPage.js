import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import EventCard from './EventCard.js'
import './styles/EventListPage.css'

class EventListPage extends Component {
    constructor(){
        super();
    }
    render() {
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

                        <MDBRow>
                            <MDBCol size="12">
                                <EventCard title="Board Games Night!" description="Avalon at Games on Tap"/>
                            </MDBCol>
                        </MDBRow>
                        
                    </div>
                </MDBContainer>
            </div>
        );
    }
}

export default EventListPage