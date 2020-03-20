import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import EventCard from './EventCard.js'
import './styles/EventListPage.css'

class EventListPage extends Component {
    constructor(){
        super();
        this.state = {
            events: []    
        }
    }
    
    componentDidMount() {
        this.setState({
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
                "lastupdated": "2020-03-16T03:12:20.337Z",
                "imgSrc": "https://mdbootstrap.com/img/Photos/Others/images/34.jpg"
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
                "lastupdated": "2020-03-16T03:11:52.198Z",
                "imgSrc": "https://mk0peerspacerest2v8e.kinstacdn.com/wp-content/uploads/play-3978841_1280-1200x600.jpg"
            }
        ]    
        });
    }
    render() {
        const events = this.state.events;
        let eventCards = events.map((events, i) => {
            return <MDBRow>
                        <MDBCol size="12">
                            <EventCard title={events.title} description={events.description} 
                                       attendees={events.attendees} maxAttendees={events.maxattendees}
                                       src={events.imgSrc} key={i}
                            />
                        </MDBCol>
                    </MDBRow>
        });
        return(
            <div className="app-page" id="eventlist-page">
                <div id="fill"></div>
                <MDBContainer>
                    <h1>Seattle</h1>
                    <div className="page-body">
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
                                <EventCard title="Rockclimbing at Phil's" description="No one has made this event yet...It could be you!"  sample={true}
                                           src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="12">
                                <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!" sample={true}
                                           src="https://assets.epicurious.com/photos/5953ca064919e41593325d97/6:4/w_620%2Ch_413/bubble_tea_recipe_062817.jpg"
                                />
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