import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBIcon } from "mdbreact";
import EventCard from './EventCard.js'
import Images from "../images.js"
import ChangeRegionModal from './ChangeRegionModal.js'
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
            sort: true,
            events: []    
        }
        this.handleChangeRegion = this.handleChangeRegion.bind(this);
        this.setNewEvents = this.setNewEvents.bind(this);
    }

    componentDidMount() {
        this.setNewEvents();
    }

    handleChangeRegion(e) {
        console.log(e.target.textContent);
        this.setState({ location: e.target.textContent }, this.setNewEvents);
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

    toggle = id => e => {
        if ((id == "Newest" && this.state.sort == false) || (id == "Upcoming" && this.state.sort == true) ){
            this.setState({
                sort: !this.state.sort
              });
        }
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
                    <div className="app-page-header">
                        <ChangeRegionModal className="app-page-header" value={this.state.location} onclick={this.handleChangeRegion}/>
                    </div>
                    <MDBCardBody className="page-body">
                        <MDBRow>
                            <MDBCol size="12">
                                <div id="eventlist-toolbar">
                                    <div id="eventlist-right-btns">
                                        <i class="fas fa-sort fa-2x"></i>
                                        <MDBBtn id="Newest" className="sort" onClick={this.toggle("Newest")} active={this.state.sort}>
                                             Newest
                                        </MDBBtn>
                                        <MDBBtn id="Upcoming" className="sort" onClick={this.toggle("Upcoming")} active={!this.state.sort}>
                                             Upcoming
                                        </MDBBtn>
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