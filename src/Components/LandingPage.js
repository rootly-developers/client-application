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
        this.handleAPICall = this.handleAPICall.bind(this);
    }

    handleAPICall() {
        const email = this.state.email + "@uwaterloo.ca";
        return new Promise((resolve, reject) => {
            axios.get(`http://localhost:8080/users/exists?email=${email}`)
            .then((res) => {    
                if (res.status == 200) {
                    console.log(res);
                    let redirectPath = res.data.exists ? "/login":"/signup";
                    resolve({redirectPath, params: { 'email': email } });
                } 
                else {
                    reject("Error");
                }
            })
        })
    }

    render() {
        const TEXT_COL_SIZE = 5;
        const IMG_COL_SIZE = 7;
        const CARD_COL_SIZE = 12;
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
                            <SubmitButton className="btn" id="email-signup-btn"  text="GO!" handleAPICall={this.handleAPICall}/>
                        </form>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={TEXT_COL_SIZE}>
                        <h2 id="text-section-2" className="text-section">In a new city? Explore it with fellow students!</h2>
                    </MDBCol>
                    <MDBCol size={IMG_COL_SIZE}>
                        <img src="section-2-image.jpg" className="img-fluid" id="section-2-img"></img>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={CARD_COL_SIZE}>
                        <EventCard title="Rockclimbing at Phil's" description="No one has made this event yet...It could be you!" sample={true} location="landing-page" 
                                   type="SPORTS"/>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={IMG_COL_SIZE}>
                        <img src="section-3-image.jpg" className="img-fluid" id="section-3-img"></img>
                    </MDBCol>
                    <MDBCol size={TEXT_COL_SIZE}>
                        <h2 id="text-section-3" className="text-section">Discover a cool event? Find someone with similar interests!</h2>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={CARD_COL_SIZE}>
                        <EventCard title="Hunt a Goose with Matlab" description="No one has made this event yet...It could be you!" sample={true} location="landing-page"
                                   type="ADVENTURE"/>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={TEXT_COL_SIZE}>
                        <h2 id="text-section-4" className="text-section">Want to throw a board game night? Invite someone new!</h2>
                    </MDBCol>
                    <MDBCol size={IMG_COL_SIZE}>
                        <img src="section-4-image.jpg" className="img-fluid" id="section-4-img"></img>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="section-margin">
                    <MDBCol size={CARD_COL_SIZE}>
                        <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!" sample={true} location="landing-page"
                                   type="COFFEE"/>
                    </MDBCol>
                </MDBRow>

        </MDBContainer>
        );
    }
}

export default LandingPage