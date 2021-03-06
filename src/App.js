import './App.css';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import { UserProvider } from './contexts/UserContext';
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
          <UserProvider>
            <NavBar/>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
              </MDBContainer>
            </div>
          </UserProvider>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
