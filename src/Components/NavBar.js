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
import Images from "../images.js"
import './styles/NavBar.css'

class NavBar extends Component {

  constructor (){
    super();
    this.state = {
      user : {
      },
      token : ""
    }
    this.getUser = this.getUser.bind(this);
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  // TODO: Add token to get user from header.
  getUser = (data)  => {
    console.log(data);
    this.setState({
      user: data.user,
      token: data.token
    });
  }

  render() {
    let active = this.state.active;
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
              <MDBNavItem>
                <MDBNavLink to="/events/new"><i class="fas fa-plus fa-2x"></i></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/myevents"><i class="far fa-calendar fa-2x"></i></MDBNavLink>
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
          <Route exact path='/login' render = {() => < LoginPage userCallback={this.getUser} />}/>
          <Route exact path='/events' component={EventListPage} />
          <Route exact path='/profile' render = {(props) => < ProfilePage userInfo={this.state.user} userToken={this.state.token} />}/>
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