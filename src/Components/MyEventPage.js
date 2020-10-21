import React, { useState, useEffect, useContext } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import EventCard from './EventCard.js'
import Images from "../images.js"
import { UserContext } from '../contexts/UserContext';
import axios from "axios";
import moment from 'moment'
import './styles/MyEventPage.css'

export default function MyEventPage() {

    const {token} = useContext(UserContext).userData;
    const [activeItem, setActiveItem] = useState("1");
    const [events, setEvents] = useState({'ARCHIVED':[],'ACTIVE':[],'TEMPLATE':[]});

    useEffect(() => {
        setNewEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function setNewEvents () {
        axios({
            method: 'get',
            url: "http://localhost:8080/home",
            params: {
                pageId: 0,
                limit: 10,
            },
            headers: {
              'Content-Type': 'application/json',
              'token': token,
            },
          })
          .then(res => {
              if(res.status === 200 || res.data.status === 200) {
                  const active=[...events.ACTIVE]
                  const template=[]
                  const archived=[...events.ARCHIVED]
                  console.log(res.data.data);
                  res.data.data.forEach(event => {
                      console.log(moment(event.start_time))
                      if (event.status){
                        if (event.status==="ARCHIVED"){
                            archived.push(event)
                        } else {
                            active.push(event)
                        }
                      } else {
                          template.push(event)
                      }
                  });
                setEvents({
                    ...events,
                    'ACTIVE': active.sort((a, b) => moment(b.created).diff(moment(a.created).valueOf())),
                    'TEMPLATE':[...events.TEMPLATE, ...template],
                    'ARCHIVED':active.sort((a, b) => moment(b.created).diff(moment(a.created).valueOf()))
                })
              }
          })
    }

    const toggle = e => {
      if (activeItem != e.target.id) {
        setActiveItem(e.target.id)
      }
    };

    return(
        <div className="app-page" id="myevents-page">
            <div className="app-page-fill"></div>
            <div className="app-main-section">
                <h1 className="app-page-header">My Events</h1>
                <div id="main-content">
                    <MDBNav className="nav-tabs justify-content-end mt-5">
                        <MDBNavItem>
                            <MDBNavLink className = 'tab' id='1' active={activeItem==1} link to="#" onClick={toggle} role="tab" >
                                Active
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className = 'tab' id='2' active={activeItem==2} link to="#" onClick={toggle} role="tab" >
                                Archived
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>

                    <MDBCardBody className="page-body">
                    <MDBTabContent activeItem={activeItem} >
                        <MDBTabPane tabId="1" role="tabpanel">
                            { events.TEMPLATE.map((event, i) => {
                                return  <MDBRow>
                                            <MDBCol size="12">
                                                <EventCard isTemplate={event.isTemplate} title={event.title} description={event.description} 
                                                        attendees={event.attendees} maxAttendees={event.maxattendees}
                                                        type={event._event_type || event.type || event.imgSrc } key={i}
                                                />
                                            </MDBCol>
                                        </MDBRow>
                            })}
                            { events.ACTIVE.map((event, i) => {
                                return  <MDBRow>
                                            <MDBCol size="12">
                                                <EventCard title={event.title} description={event.description} 
                                                        attendees={event.attendees} maxAttendees={event.maxattendees}
                                                        type={event._event_type || event.type || event.imgSrc } key={i}
                                                />
                                            </MDBCol>
                                        </MDBRow>
                            })}
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                            { events.ARCHIVED.map((event, i) => {
                                return  <MDBRow>
                                            <MDBCol size="12">
                                                <EventCard title={event.title} description={event.description} 
                                                        attendees={event.attendees} maxAttendees={event.maxattendees}
                                                        type={event._event_type || event.type || event.imgSrc } key={i}
                                                />
                                            </MDBCol>
                                        </MDBRow>
                            })}
                            </MDBTabPane>
                    </MDBTabContent>
                    </MDBCardBody>
                    </div>
                </div>
        </div>
    );
}
