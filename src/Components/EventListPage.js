import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import EventCard from './EventCard.js'
import Images from "../images.js"
import ChangeRegionDropDown from './ChangeRegionDropDown.js'
import './styles/EventListPage.css'

class EventListPage extends Component {
    constructor(){
        super();
        this.state = {
            location: "Seattle",
            events: []    
        }
        this.handleChangeRegion = this.handleChangeRegion.bind(this);
    }

    componentDidMount() {
        this.setState({
            events: [
            {
                "id": 2,
                "organizerid": "yewrNHUjMTa7IAfbXsObfQJOzJB3",
                "status": "ACTIVE",
                "title": "San Francisco",
                "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident et accusamus iusto odio dignissimos et dolorum fuga.",
                "address": "Splunk @ SF",
                "city": "boston",
                "starttime": "+158365-11-11T08:00:00.000Z",
                "endtime": "+158375-11-11T08:00:00.000Z",
                "attendees": 4,
                "maxattendees": 9,
                "created": "2020-03-16T03:12:20.337Z",
                "lastupdated": "2020-03-16T03:12:20.337Z",
                "imgSrc": Images.events.adventure
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
                "imgSrc": Images.events.coffee
            }
        ]    
        });
    }

    handleChangeRegion(e) {
        this.setState({ location: e.target.innerHTML })
    }

    render() {
        const events = this.state.events;
        let eventCards = events.map((events, i) => {
            return  <MDBRow>
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
                <div className="app-page-fill"></div>
                <div className="app-main-section">
                    <h1 className="app-page-header">{this.state.location}</h1>
                    <MDBCardBody className="page-body">
                        <MDBRow>
                            <MDBCol size="12">
                                <div id="eventlist-toolbar">
                                    <ChangeRegionDropDown onclick={this.handleChangeRegion}/>
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
                                            src={Images.events.theatre}
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="12">
                                <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!" sample={true}
                                            src={Images.events.games}
                                />
                            </MDBCol>
                        </MDBRow>

                        { eventCards }
                    </MDBCardBody>
                    </div>
            </div>
        );
    }
}

export default EventListPage