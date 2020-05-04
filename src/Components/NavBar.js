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
import './styles/NavBar.css'

class NavBar extends Component {
  
state = {
  isOpen: false,
  active: true
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  let active = this.state.active;
  return (
    <Router>
      <MDBNavbar color="blue" dark expand="md" fixed="top" id="nav-bar">
        <MDBNavbarBrand>
          <MDBNavLink to="/"><img id="logo" src="/images/logos/light-logo.svg"></img></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active={active}>
              <MDBNavLink to="/"><i class="fas fa-plus-circle fa-2x"></i></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/events"><i class="far fa-calendar fa-2x"></i></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/profile"><i class="fas fa-user-circle fa-2x"></i></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
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
        <Route exact path='/myevents' component={MyEventPage}/>
        <Route exact path='/signup' component={SignUpPage}/>
        <Route exact path='/verify' component={VerifyPage}/>
      </Switch>
    </Router>
    );
  }
}

export default NavBar;