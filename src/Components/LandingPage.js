import React, { Component } from 'react';
import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import SubmitButton from './SubmitButton.js';
import axios from 'axios';
import './styles/LandingPage.css'

class LandingPage extends Component {
    constructor(){
        super();
        this.state = {
            email: ""
        }
    }

    render() {
        return(
            <MDBContainer id="landingpage">
                <MDBRow id="landingpage-section-1">
                    <MDBCol size="6">
                        <div id="landingpage-header">
                            <h1>Welcome to Rootly.</h1>
                            <h3>Organize quick and casual events within the Waterloo Community</h3>
                        </div>
                    </MDBCol>
                    <MDBCol size="6">
                        <form id="email-signup">
                            <h3>Your UW Email</h3>
                            <MDBInput 
                                label="Email"
                                type="text"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                            <SubmitButton id="email-signup-btn" email={this.state.email} type={"landingPage"}></SubmitButton>
                            {/* <MDBBtn id="email-signup-btn">Go!</MDBBtn> */}
                        </form>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="5">
                        <h2 id="section-2-h2">In a new city? Explore it with fellow students!</h2>
                    </MDBCol>
                    <MDBCol size="7">
                        <img src="section-2-image.jpg" id="section-2-img"></img>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="10">
                        <div className="event-card">
                            <img src="event-icon.PNG"></img>
                            <div id="event-card-description">
                                <h4>Rockclimbing at Phil's</h4>
                                <p>No one has made this event yet...It could be you!</p>
                            </div>
                            <MDBBtn id="make-event-btn">MAKE EVENT</MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="10">
                        <div className="event-card">
                            <img src="event-icon.PNG"></img>
                            <div id="event-card-description">
                                <h4>Bubble Tea at Icon</h4>
                                <p>No one has made this event yet...It could be you!</p>
                            </div>
                            <MDBBtn id="make-event-btn">MAKE EVENT</MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>
        </MDBContainer>
        );
    }
}

export default LandingPage