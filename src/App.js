import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage'
import LoginPage from './Components/LoginPage'
import EventListPage from './Components/EventListPage'
import ProfilePage from './Components/ProfilePage'
import CreateEventPage from './Components/CreateEventPage'
import EventDetailsPage from './Components/EventDetailsPage'
import MyEventPage from './Components/MyEventPage'
import SignUpPage from './Components/SignUpPage'
import NavBar from './Components/NavBar'
import {
  MDBContainer
  } from "mdbreact";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return(
      <div id="bootstrap-override">
        <MDBContainer fluid id="app-container">
          <NavBar/>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
