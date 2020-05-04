import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import EventCard from './EventCard.js'
import ChangeRegionDropDown from './ChangeRegionDropDown.js'
import axios from "axios";
import './styles/EventListPage.css'

const eventTemplates = [
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
];

class EventListPage extends Component {
    constructor(){
        super();
        this.state = {
            location: "Seattle",
            events: []    
        }
        this.handleChangeRegion = this.handleChangeRegion.bind(this);
        this.setNewEvents = this.setNewEvents.bind(this);
    }

    componentDidMount() {
        this.setNewEvents();
    }

    handleChangeRegion(e) {
        this.setState({ location: e.target.innerHTML }, this.setNewEvents);
    }

    setNewEvents() {
        axios({
            method: 'get',
            url: "http://localhost:8080/home",
            params: {
                pageId: 0,
                limit: 10,
                location: this.state.location
            },
            headers: {
              'Content-Type': 'application/json',
              'token': this.props.location.token
            },
          })
          .then(res => {
              if(res.status == 200 && res.data.status == 200) {
                  let events = eventTemplates.slice();
                  res.data.data.forEach(event => {
                      events.push(event);
                  });
                  this.setState({events: events});
              }
          })
    }

    render() {
        const events = this.state.events;
        let eventCards = events.map((events, i) => {
            return  <MDBRow>
                        <MDBCol size="12">
                            <EventCard title={events.title} description={events.description} 
                                    attendees={events.attendees} maxAttendees={events.max_attendees}
                                    type={events.event_type} key={i}
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
                                        <p>Newest</p>
                                        <p>Upcoming</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="12">
                                <EventCard title="Rockclimbing at Phil's" description="No one has made this event yet...It could be you!"  sample={true}
                                            type="SPORTS"
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="12">
                                <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!" sample={true}
                                            src="COFFEE"
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