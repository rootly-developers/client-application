import React, { useState, useEffect, useContext } from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBBtn, } from "mdbreact";
import EventCard from './EventCard.js'
import ChangeRegionModal from './ChangeRegionModal.js'
import axios from "axios";
import './styles/EventListPage.css'
import  { UserContext } from '../contexts/UserContext';
const locations = require('../commons/locations.json');

const eventTemplates = [
    {
        "id": 2,
        "organizerid": "yewrNHUjMTa7IAfbXsObfQJOzJB3",
        "status": "ACTIVE",
        "title": "San Francisco",
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident et accusamus iusto odio dignissimos et dolorum fuga.",
        "address": "Splunk @ SF",
        "city": "boston",
        "start_time": "+158365-11-11T08:00:00.000Z",
        "end_time": "+158375-11-11T08:00:00.000Z",
        "num_attendees": 4,
        "max_attendees": 9,
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
        "start_time": "+158365-11-11T08:00:00.000Z",
        "end_time": "+158375-11-11T08:00:00.000Z",
        "num_attendees": 7,
        "max_attendees": 9,
        "created": "2020-03-16T03:11:52.198Z",
        "lastupdated": "2020-03-16T03:11:52.198Z",
        "imgSrc": "https://mk0peerspacerest2v8e.kinstacdn.com/wp-content/uploads/play-3978841_1280-1200x600.jpg"
    }
];

export default function EventListPage(props) {
    const [location, setLocation] = useState(locations.SEA.canonical);
    const [sort, setSort] = useState(true);
    const [events, setEvents] = useState([]);
    const { token } = useContext(UserContext).userData;

    useEffect(() => {
        setNewEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    function handleChangeRegion(e) {
        setLocation(convertPrettyToCanon(e.target.children[1].innerText));
    }

    // TODO: Ideally we should find a way to not use innerText and somehow get the id of the child.
    function convertPrettyToCanon(prettyText) {
        for (var key in locations) {
            if (locations[key].pretty === prettyText) {
                return locations[key].canonical;
            }
        }
    }

    function setNewEvents() {
        console.log(locations[location].pretty);
        axios({
            method: 'get',
            url: "http://localhost:8080/home",
            params: {
                pageId: 0,
                limit: 10,
                location: locations[location].pretty
            },
            headers: {
              'Content-Type': 'application/json',
              'token': token
            },
          })
          .then(res => {
              if(res.status == 200) {
                  let newEvents = eventTemplates.slice();
                  res.data.data.forEach(event => {
                      newEvents.push(event);
                  });
                  console.log(res.data);
                  setEvents(newEvents);
              }
          })
    }

    const toggle = id => e => {
        if ((id === "Newest" && sort === false) || (id === "Upcoming" && sort === true) ){
            setSort(!sort);
        }
    }

    let eventCards = events.map((event, i) => {
        return  <MDBRow>
                    <MDBCol size="12">
                        <EventCard 
                            title={event.title} 
                            description={event.description} 
                            attendees={event.num_attendees}
                            maxAttendees={event.max_attendees}
                            type={event._event_type}
                            key={i}
                            eventId={event.id}
                            isTemplate={event.isTemplate}
                        />
                    </MDBCol>
                 </MDBRow>
    });
    return(
        <div className="app-page" id="eventlist-page">
            <div className="app-page-fill"></div>
            <div className="app-main-section">
                <div className="app-page-header">
                    <ChangeRegionModal className="app-page-header" value={location} onclick={(e) => handleChangeRegion(e)}/>
                </div>
                <MDBCardBody className="page-body">
                    <MDBRow>
                        <MDBCol size="12">
                            <div id="eventlist-toolbar">
                                <div id="eventlist-right-btns">
                                    <i class="fas fa-sort fa-2x"></i>
                                    <MDBBtn id="Newest" className="sort" onClick={toggle("Newest")} active={sort}>
                                         Newest
                                    </MDBBtn>
                                    <MDBBtn id="Upcoming" className="sort" onClick={toggle("Upcoming")} active={!sort}>
                                         Upcoming
                                    </MDBBtn>
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
                                        type="ADVENTURE"
                            />
                        </MDBCol>
                    </MDBRow>

                    { eventCards }
                </MDBCardBody>
                </div>
        </div>
    );
}