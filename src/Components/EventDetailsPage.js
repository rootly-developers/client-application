import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './styles/EventDetailsPage.css'

class EventDetailsPage extends Component {
    constructor(){
        super();
    }
    render() {
        return(
            <div className="app-page">
                <div id="fill"></div>
                <MDBContainer>
                    <h1>Rock Climbing</h1>
                    <div className="page-body">

                    </div>
                </MDBContainer>
            </div>
        );
    }
}

export default EventDetailsPage