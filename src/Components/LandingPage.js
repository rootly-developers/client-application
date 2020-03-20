import React, { Component } from 'react';
import { MDBInputGroup, MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import SubmitButton from './SubmitButton.js';
import EventCard from './EventCard.js';
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
                <MDBRow id="landingpage-section-1" className="landingpage-section">
                    <MDBCol size="6" id="landingpage-header-col">
                        <div id="landingpage-header">
                            <h1>Welcome to Rootly.</h1>
                            <h3>Organize quick and casual events within the Waterloo Community</h3>
                            <h2>What does that look like?</h2>
                        </div>
                    </MDBCol>
                    <MDBCol size="6">
                        <form id="email-signup">
                            <h3>Your UW Email</h3>
                            <MDBInputGroup
                                material
                                containerClassName="mb-3 mt-0"
                                append="@uwaterloo.ca"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                            <SubmitButton id="email-signup-btn" email={this.state.email} type={"landingPage"} text="GO!"></SubmitButton>
                        </form>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="landingpage-section">
                    <MDBCol size="5">
                        <h2 id="section-2-h2">In a new city? Explore it with fellow students!</h2>
                    </MDBCol>
                    <MDBCol size="7">
                        <img src="section-2-image.jpg" id="section-2-img" className="img-fluid"></img>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="12">
                        <EventCard title="Rockclimbing at Phil's" description="No one has made this event yet...It could be you!" sample={true}
                                   src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="12">
                        <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!" sample={true}
                                   src="https://assets.epicurious.com/photos/5953ca064919e41593325d97/6:4/w_620%2Ch_413/bubble_tea_recipe_062817.jpg"
                        />
                    </MDBCol>
                </MDBRow>
        </MDBContainer>
        );
    }
}

export default LandingPage