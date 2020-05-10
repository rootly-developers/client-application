import React, { Fragment, Component } from "react";
import { withRouter } from 'react-router';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import axios from "axios";
import './styles/NotificationDropdown.css'

function NotifIcon(props) {
    const notiftype = props.value._notification_type;
    const isread = props.value.is_read ? 'var(--medgray)' : 'var(--saturatedpurple)';
    switch(notiftype) {
        case 'EVENT_COMMUNICATION':
            return <i class="fas fa-comment fa-2x" style={{color: isread}}></i>;
        case 'EVENT_UPDATE':
            return <i class="fas fa-calendar-day fa-2x" style={{color: isread}}></i>;   
        case 'PEOPLE_MGMT':
            return <i class="fas fa-users fa-2x" style={{color: isread}}></i>;
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
        this.isAllRead = this.isAllRead.bind(this);
        this.isRead = this.isRead.bind(this);
    }

    componentDidMount() {
        this.getNotifications();
    }

    isAllRead(){
        let read = this.state.notifications.slice(0, 10).filter(e => e.is_read == false).length > 0 ? false : true;
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
              'token': "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZjMmM4YmIyNmE3OGM0M2JkODYzNzA1YjNkNzkyMWI0ZTY0MjVkNTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9vdGx5LTExMjM1ODEzIiwiYXVkIjoicm9vdGx5LTExMjM1ODEzIiwiYXV0aF90aW1lIjoxNTg5MDc5OTM3LCJ1c2VyX2lkIjoiOVgxTjNqUkYzTWRJMnRIOE9ZTzJOYWsyYUloMSIsInN1YiI6IjlYMU4zalJGM01kSTJ0SDhPWU8yTmFrMmFJaDEiLCJpYXQiOjE1ODkwNzk5MzcsImV4cCI6MTU4OTA4MzUzNywiZW1haWwiOiJtaWNrZXkxMDAzQHV3YXRlcmxvby5jYSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtaWNrZXkxMDAzQHV3YXRlcmxvby5jYSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lJ6ZZwjvbegPi-EbZPNSXIh5HHeYatDeuWiO-VzAlmFRX_0yacv-lhY4iGLTtxMYH_eCqH64U_PbZIxxbH6IGCoKYJQSWiiyUxjOJuwu98L20fl1Sz_gBYOAwoRqxEUglxP_1S2_5JngSzzsa1f8ctDWP5_ez4jHgbxE7ON5dRnqVFMBUh31GBjUDN1JHjEIUwJ4tAgZk0ClqVo9j5Sv6iN0BUuZmpEak-zcgwPO5pXDRg3cJcgqxfX8YNhNZou5o2XGBdK7TZPrzc-BOz9-HhCQqaniWY4u3QW4DAO-pyJ3gmnTLV8EtbVE_OZ_vZI6A9XU1hgCUui2QZNWf4nqHw"
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

    isRead(id, event_id) {
        axios.post(`http://localhost:8080/notification/${id}/read`, {
            token: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZjMmM4YmIyNmE3OGM0M2JkODYzNzA1YjNkNzkyMWI0ZTY0MjVkNTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9vdGx5LTExMjM1ODEzIiwiYXVkIjoicm9vdGx5LTExMjM1ODEzIiwiYXV0aF90aW1lIjoxNTg5MDc5OTM3LCJ1c2VyX2lkIjoiOVgxTjNqUkYzTWRJMnRIOE9ZTzJOYWsyYUloMSIsInN1YiI6IjlYMU4zalJGM01kSTJ0SDhPWU8yTmFrMmFJaDEiLCJpYXQiOjE1ODkwNzk5MzcsImV4cCI6MTU4OTA4MzUzNywiZW1haWwiOiJtaWNrZXkxMDAzQHV3YXRlcmxvby5jYSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtaWNrZXkxMDAzQHV3YXRlcmxvby5jYSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lJ6ZZwjvbegPi-EbZPNSXIh5HHeYatDeuWiO-VzAlmFRX_0yacv-lhY4iGLTtxMYH_eCqH64U_PbZIxxbH6IGCoKYJQSWiiyUxjOJuwu98L20fl1Sz_gBYOAwoRqxEUglxP_1S2_5JngSzzsa1f8ctDWP5_ez4jHgbxE7ON5dRnqVFMBUh31GBjUDN1JHjEIUwJ4tAgZk0ClqVo9j5Sv6iN0BUuZmpEak-zcgwPO5pXDRg3cJcgqxfX8YNhNZou5o2XGBdK7TZPrzc-BOz9-HhCQqaniWY4u3QW4DAO-pyJ3gmnTLV8EtbVE_OZ_vZI6A9XU1hgCUui2QZNWf4nqHw"
        });
        
        // Redirect to event page
        // this.props.history.push('/events/' + event_id);
    }

    render(){
        this.isAllRead();
        const notification = this.state.notifications;
        let notif = notification.slice(0, 10).map((notification, i) => {
            return  <MDBDropdownItem onClick={() => this.isRead(notification.id, notification.event_id)} style={notification.is_read ? {fontWeight: '400'} : {fontWeight: '900'}}> 
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
                <MDBDropdownToggle caret color="primary" className="notifdropdown" style={this.state.allRead ? {backgroundColor : 'yellow'} : {backgroundColor: 'yellow'}}>
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