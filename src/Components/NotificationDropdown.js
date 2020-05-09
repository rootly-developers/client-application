import React, { Fragment, Component } from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import './styles/NotificationDropdown.css'

function NotifIcon(props) {
    const notiftype = props.value._notification_type;
    const isread = props.value.is_read ? 'var(--medgray)' : 'var(--saturatedpurple)';
    switch(notiftype) {
        case 'EVENT_COMMUNICATION':
            return <i class="fas fa-comment fa-1x" style={{color: isread}}></i>;
        case 'EVENT_UPDATE':
            return <i class="fas fa-calendar-day fa-1x" style={{color: isread}}></i>;   
        case 'PEOPLE_MGMT':
            return <i class="fas fa-users fa-1x" style={{color: isread}}></i>;
        default:
            return "";
    }
}

class Notification extends Component {

    constructor(){
        super();
    }

    render(){
        const notification = this.props.value;
        let notif = notification.map((notification, i) => {
            return  <MDBDropdownItem style={notification.is_read ? {fontWeight: '400'} : {fontWeight: '900'}}> 
                        <NotifIcon value={notification}/>
                        {notification.description}
                        <MDBDropdownItem divider />
                    </MDBDropdownItem>
        });

        return (
            <Fragment>
            <MDBDropdown>
                <MDBDropdownToggle caret color="primary">
                    <i class="fas fa-bell fa-2x"></i>
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