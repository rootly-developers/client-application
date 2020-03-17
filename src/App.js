import './App.css';
import React, { Component } from 'react';
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage';
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
