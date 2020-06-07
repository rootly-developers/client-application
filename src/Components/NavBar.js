import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../Components/LandingPage'
import LoginPage from '../Components/LoginPage'
import EventListPage from '../Components/EventListPage'
import ProfilePage from '../Components/ProfilePage'
import CreateEventPage from '../Components/CreateEventPage'
import EventDetailsPage from '../Components/EventDetailsPage'
import MyEventPage from '../Components/MyEventPage'
import SignUpPage from '../Components/SignUpPage'
import VerifyPage from '../Components/VerifyPage'
import NotificationDropdown from './NotificationDropdown.js'
import Images from "../images.js"
import axios from "axios";
import './styles/NavBar.css'

class NavBar extends Component {

  constructor() {
    super();
    this.state = {
        isOpen: false,
        active: true
      }
    };

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="blue" dark expand="md" fixed="top" id="nav-bar">
        <MDBNavbarBrand>
          <MDBNavLink to="/events"><img id="logo" src={Images.logos.light}></img></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <NotificationDropdown value={this.state.notifications}></NotificationDropdown>
            <MDBNavItem>
              <MDBNavLink to="/events/new"><i class="fas fa-plus fa-2x"></i></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/myevents"><i class="far fa-calendar fa-2x"></i></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/profile"><i class="fas fa-user-circle fa-2x"></i></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/events' component={EventListPage} />
        <Route exact path='/profile' component={ProfilePage}/>
        <Route exact path='/events/new' component={CreateEventPage} />
        <Route exact path='/eventDetails' component={EventDetailsPage} />
        <Route exact path='/events/:eventId' component={EventDetailsPage} />
        <Route exact path='/myevents' component={MyEventPage}/>
        <Route exact path='/signup' component={SignUpPage}/>
        <Route exact path='/verify' component={VerifyPage}/>
      </Switch>
    </Router>
    );
  }
}

export default NavBar;