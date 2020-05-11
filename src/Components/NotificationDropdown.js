import React, { Fragment, Component } from "react";
import { withRouter } from 'react-router';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import axios from "axios";
import './styles/NotificationDropdown.css'

function NotifIcon(props) {
    const notifType = props.value._notification_type;
    const isRead = props.value.is_read ? 'var(--medgray)' : 'var(--saturatedpurple)';
    switch(notifType) {
        case 'EVENT_COMMUNICATION':
            return <i class="fas fa-comment fa-2x" style={{color: isRead}}></i>;
        case 'EVENT_UPDATE':
            return <i class="fas fa-calendar-day fa-2x" style={{color: isRead}}></i>;   
        case 'PEOPLE_MGMT':
            return <i class="fas fa-users fa-2x" style={{color: isRead}}></i>;
        default:
            return "";
    }
}

class Notification extends Component {

    constructor(props){
        super(props);
        this.state = {
            allRead: false,
            notifications: []
        };
        this.handleisAllRead = this.handleisAllRead.bind(this);
        this.handleRead = this.handleRead.bind(this);
    }

    componentDidMount() {
        this.getNotifications();
    }

    handleisAllRead(){
        let read = !(this.state.notifications.slice(0, 10).filter(e => e.is_read == false).length > 0);
        if ( read != this.state.allRead){
            this.setState({
                allRead: !this.state.allRead
              });
        }
    }

    getNotifications() {
        axios({
            method: 'get',
            url: "http://localhost:8080/notifications",
            params: {
              pageId: 0,
              limit: 10,
            },
            headers: {
              'Content-Type': 'application/json',
              'token': ""
            },
          })
          .then(res => {
              if(res.status == 200) {
                  let notifs = [];
                  res.data.forEach(notification => {
                      notifs.push(notification);
                  });
                  this.setState({notifications: notifs});
              }
          })
    }

    handleRead(id, event_id) {
        axios.post(`http://localhost:8080/notification/${id}/read`, {
            token: ""
        });
        
        // Redirect to event page
        // this.props.history.push('/events/' + event_id);
    }

    render(){
        this.handleisAllRead();
        const notifications = this.state.notifications;
        let notif = notifications.slice(0, 10).map((notification, i) => {
            return  <MDBDropdownItem onClick={() => this.handleRead(notification.id, notification.event_id)} style={notification.is_read ? {fontWeight: '400'} : {fontWeight: '900'}}> 
                        <div className="contents">
                            <NotifIcon value={notification}/>
                            <div className="description">{notification.description}</div>
                        </div>
                        <MDBDropdownItem divider />
                    </MDBDropdownItem>
        });

        return (
            <Fragment>
            <MDBDropdown>
                <MDBDropdownToggle caret color="primary" className="notifdropdown">
                    {this.state.allRead ? <i class="far fa-bell fa-2x"></i> : <i class="fas fa-bell fa-2x" style={{color: "var(--white)"}}></i>}
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                { notif }
                </MDBDropdownMenu>
            </MDBDropdown>
            </Fragment>
        );
    }
}

export default Notification;