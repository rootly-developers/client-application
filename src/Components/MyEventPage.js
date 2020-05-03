import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import EventCard from './EventCard.js'
import Images from "../images.js"
import axios from "axios";
import './styles/MyEventPage.css'

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

class MyEventPage extends Component {
    constructor(){
        super();
        this.state = {
            activeItem: "1",
            events: []    
        }
        this.setNewEvents = this.setNewEvents.bind(this);
    }

    componentDidMount() {
        this.setNewEvents();
    }

    setNewEvents() {
        axios({
            method: 'get',
            url: "http://localhost:8080/home",
            params: {
                pageId: 0,
                limit: 10,
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

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

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
            <div className="app-page" id="myevents-page">
                <div className="app-page-fill"></div>
                <div className="app-main-section">
                    <h1 className="app-page-header">My Events</h1>
                    <div id="main-content">
                        <MDBNav className="nav-tabs justify-content-end mt-5">
                            <MDBNavItem>
                                <MDBNavLink className = 'tab' link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                                    Active
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className = 'tab' link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                                    Archived
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>

                        <MDBCardBody className="page-body">
                        <MDBTabContent activeItem={this.state.activeItem} >
                            <MDBTabPane tabId="1" role="tabpanel">
                                <MDBRow>
                                    <MDBCol size="12">
                                        <EventCard title="Rockclimbing at Phil's" description="No one has made this event yet...It could be you!"  sample={true}
                                                    src={Images.events.theatre}
                                        />
                                    </MDBCol>
                                </MDBRow>
                            </MDBTabPane>
                            <MDBTabPane tabId="2" role="tabpanel">
                                <MDBRow>
                                    <MDBCol size="12">
                                        <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!" sample={true}
                                                    src={Images.events.games}
                                        />
                                    </MDBCol>
                                </MDBRow>
                                </MDBTabPane>
                        </MDBTabContent>

                            { eventCards }
                        </MDBCardBody>
                        </div>
                    </div>
            </div>
        );
    }
}

export default MyEventPage