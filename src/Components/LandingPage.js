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
        const textColSize = 7;
        const imgColSize = 5;
        const cardColSize = 12;
        return(
            <MDBContainer id="landingpage">
                <MDBRow id="landingpage-section-1" className="landingpage-section">
                    <MDBCol size="6" id="landingpage-header-col">
                        <div id="landingpage-header">
                            <h1>Welcome to Rootly.</h1>
                            <h3>Organize quick and casual events within the Waterloo Community</h3>
                            <h2 style={{fontStyle: "italic"}}>What does that look like?</h2>
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

                <MDBRow className="section-margin">
                    <MDBCol size={textColSize}>
                        <h2 id="section-2-h2">In a new city? Explore it with fellow students!</h2>
                    </MDBCol>
                    <MDBCol size={imgColSize}>
                        <img src="section-2-image.jpg" className="img-fluid" id="section-2-img"></img>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={cardColSize}>
                        <EventCard title="Rockclimbing at Phil's" description="No one has made this event yet...It could be you!" sample={true} location="landing-page"/>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={{imgColSize}}>
                        <img src="section-3-image.jpg" className="img-fluid" id="section-3-img"></img>
                    </MDBCol>
                    <MDBCol size={textColSize}>
                        <h2 id="section-3-h2">Discover a cool event? Find someone with similar interests!</h2>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size={cardColSize}>
                        <EventCard title="Hunt a Goose with Matlab" description="No one has made this event yet...It could be you!" sample={true} location="landing-page"/>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={textColSize}>
                        <h2 id="section-4-h2">Want to throw a board game night? Invite someone new!</h2>
                    </MDBCol>
                    <MDBCol size={imgColSize}>
                        <img src="section-4-image.jpg" className="img-fluid" id="section-4-img"></img>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={cardColSize}>
                        <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!" sample={true} location="landing-page"/>
                    </MDBCol>
                </MDBRow>

        </MDBContainer>
        );
    }
}

export default LandingPage