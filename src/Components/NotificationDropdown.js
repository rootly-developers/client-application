import React, { Fragment, useState, useEffect, useContext } from "react";
import { withRouter } from 'react-router';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';
import './styles/NotificationDropdown.css'

function NotifIcon(props) {
    const notifType = props.value._notification_type;
    const commentColour = props.value.is_read ? 'var(--medgray)' : 'var(--saturatedpurple)';
    switch(notifType) {
        case 'EVENT_COMMUNICATION':
            return <i class="fas fa-comment fa-2x" style={{color: commentColour}}></i>;
        case 'EVENT_UPDATE':
            return <i class="fas fa-calendar-day fa-2x" style={{color: commentColour}}></i>;   
        case 'PEOPLE_MGMT':
            return <i class="fas fa-users fa-2x" style={{color: commentColour}}></i>;
        default:
            return "";
    }
}

export default function NotificationList() {

    const {token} = useContext(UserContext).userData;
    const [isAllRead, setIsAllRead] = useState(false);
    const [notifications, setNotifications] = useState([]);
    let history = useHistory();

    function getNotifications (){
        axios({
            method: 'get',
            url: "http://localhost:8080/notifications",
            params: {
              pageId: 0,
              limit: 10,
            },
            headers: {
              'Content-Type': 'application/json',
              'token': token},
          })
          .then(res => {
              if(res.status === 200) {
                  let notifs = [];
                  res.data.forEach(notifItem => {
                      notifs.push(notifItem);
                  });
                  setNotifications(notifs)
              }
              let read = (notifications.slice(0, 10).filter(e => e.is_read === false).length > 0);
              setIsAllRead(!read)
          })
    }

    useEffect(() => {
        getNotifications()
    })

    const handleRead = (id, event_id) => {
        axios.post(`http://localhost:8080/notifications/${id}/read`, {
            token: token});
        history.push('/events/'+ event_id )
    }

    return(
        <Fragment>
            <MDBDropdown>
                <MDBDropdownToggle color="primary" className="notifdropdown">
                    <i class={isAllRead ? "far fa-bell fa-2x" : "fas fa-bell fa-2x"} style={{color: "var(--white)"}}></i>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                {notifications.length>0 && notifications.slice(0, 10).map((notifItem, i) => {
                    return <MDBDropdownItem onClick={() => handleRead(notifItem.id, notifItem.event_id)} style={notifItem.is_read ? {fontWeight: '400'} : {fontWeight: '900'}}> 
                                <div className="contents">
                                    <NotifIcon value={notifItem}/>
                                    <div className="description">{notifItem.description}</div>
                                </div>
                                <MDBDropdownItem divider />
                            </MDBDropdownItem>
                })}
                </MDBDropdownMenu>
            </MDBDropdown>
        </Fragment>
    )
}
