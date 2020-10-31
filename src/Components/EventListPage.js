import React, { useState, useEffect, useContext } from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBBtn, } from "mdbreact";
import EventCard from './EventCard.js'
import ChangeRegionModal from './modals/ChangeRegionModal.js'
import axios from "axios";
import moment from 'moment'
import './styles/EventListPage.css'
import  { UserContext } from '../contexts/UserContext';
const locations = require('../commons/locations.json');

const eventTemplates = [
    {
        "id": 3,
        "organizerid": "yewrNHUjMTa7IAfbXsObfQJOzJB3",
        "status": "ACTIVE",
        "title": "JACKSON IS BAD",
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident et accusamus iusto odio dignissimos et dolorum fuga.",
        "address": "Splunk @ SF",
        "city": "boston",
        "start_time": "2020-03-01T03:12:20.337Z",
        "end_time": "2020-03-04T03:12:20.337Z",
        "num_attendees": 4,
        "max_attendees": 9,
        "created": "2020-03-01T03:12:20.337Z",
        "lastupdated": "2020-03-16T03:12:20.337Z",
        "imgSrc": "https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg"
    },
    {
        "id": 2,
        "organizerid": "yewrNHUjMTa7IAfbXsObfQJOzJB3",
        "status": "ACTIVE",
        "title": "San Francisco",
        "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident et accusamus iusto odio dignissimos et dolorum fuga.",
        "address": "Splunk @ SF",
        "city": "boston",
        "start_time": "2020-03-02T03:12:20.337Z",
        "end_time": "2020-03-04T03:12:20.337Z",
        "num_attendees": 4,
        "max_attendees": 9,
        "created": "2020-03-02T03:12:20.337Z",
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
        "start_time": "2020-03-03T03:12:20.337Z",
        "end_time": "2020-03-04T03:12:20.337Z",
        "num_attendees": 7,
        "max_attendees": 9,
        "created": "2020-03-03T03:11:52.198Z",
        "lastupdated": "2020-03-16T03:11:52.198Z",
        "imgSrc": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
    }
];

export default function EventListPage(props) {
    const [location, setLocation] = useState(locations.SEA.canonical);
    const [sort, setSort] = useState(true);
    const [events, setEvents] = useState({'ACTIVE':[],'TEMPLATE':[]});
    const { token } = useContext(UserContext).userData;

    useEffect(() => {
        setNewEvents();
        handleNewest();
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

    function handleNewest () {
        let active = [...events.ACTIVE]
        active = active.sort((a, b) => moment(b.created).diff(moment(a.created).valueOf()))
        toggle("Newest")
        setEvents({...events, ACTIVE: active})
    };

    function handleUpcoming () {
        let active = [...events.ACTIVE]
        active = active.sort((a, b) => moment(a.start_time).diff(moment(b.start_time).valueOf()))
        toggle("Upcoming")
        setEvents({...events, ACTIVE: active})
    };

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
                const active=[...events.ACTIVE]
                const template=[]
                res.data.data.forEach(event => {
                    if (event.status === "ACTIVE"){
                        active.push(event)
                    } else {
                        template.push(event)
                    }
                });
                eventTemplates.forEach(event => {
                    if (event.status === "ACTIVE"){
                        active.push(event)
                    } else {
                        template.push(event)
                    }
                });

                setEvents({
                    ...events,
                    'ACTIVE': active.sort((a, b) => moment(b.created).diff(moment(a.created).valueOf())),
                    'TEMPLATE':[...events.TEMPLATE, ...template],
                })
              }
          })
    }

    const toggle = id => {
        console.log(id, sort)
        if ((id === "Newest" && sort === false) || (id === "Upcoming" && sort === true) ){
            setSort(!sort);
        }
    }

    let templates = events.TEMPLATE.map((event, i) => {
        return  <MDBRow>
                    <MDBCol size="12">
                        <EventCard 
                            title={event.title} 
                            description={event.description} 
                            attendees={event.num_attendees}
                            maxAttendees={event.max_attendees}
                            type={event._event_type || event.type || event.imgSrc }
                            key={i}
                            eventId={event.id}
                            isTemplate={event.isTemplate}
                        />
                    </MDBCol>
                 </MDBRow>
    });

    let eventCards = events.ACTIVE.map((event, i) => {
        return  <MDBRow>
                    <MDBCol size="12">
                        <EventCard 
                            title={event.title} 
                            description={event.description} 
                            attendees={event.num_attendees}
                            maxAttendees={event.max_attendees}
                            type={event._event_type || event.type || event.imgSrc }
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
                                    <MDBBtn id="Newest" className="sort" onClick={handleNewest} active={sort}>
                                         Newest
                                    </MDBBtn>
                                    <MDBBtn id="Upcoming" className="sort" onClick={handleUpcoming} active={!sort}>
                                         Upcoming
                                    </MDBBtn>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    { eventCards }
                    { templates }
                </MDBCardBody>
                </div>
        </div>
    );
}