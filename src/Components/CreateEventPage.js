import React, { Component } from 'react';
import { MDBInput, MDBContainer } from 'mdbreact';
import './styles/CreateEventPage.css';
import SubmitButton from './SubmitButton';
import axios from "axios";

class CreateEventPage extends Component {
    constructor(){
        super();
        this.state = {
            eventName: '',
            exDescription: '',
            inDescription: '',
            address: '',
            city: '',
            link: ''
        }
    }

    render() {
        return(
            <div className="app-page" id="createevent-page">
                <div className="app-page-fill"></div>
                <div className="app-main-section">
                    <MDBContainer id="create-page">
                        <h1>Make Event</h1>
                        <form id="create-form">
                            <MDBInput
                                className="textField"
                                autoComplete="off"
                                type="text"
                                name="eventName"
                                label="Event Name"
                                onChange={(e) => this.setState({eventName: e.target.value})}
                            />
                            <MDBInput
                                className="textField"
                                autoComplete="off"
                                type="text"
                                name="exDescription"
                                label="External Description"
                                onChange={(e) => this.setState({exDescription: e.target.value})}
                            />
                            <MDBInput
                                className="textField"
                                autoComplete="off"
                                type="text"
                                name="inDescription"
                                label="Internal Description"
                                onChange={(e) => this.setState({inDescription: e.target.value})}
                            />
                            <MDBInput
                                className="textField"
                                autoComplete="off"
                                type="text"
                                name="address"
                                label="Address"
                                onChange={(e) => this.setState({address: e.target.value})}
                            />
                            <MDBInput
                                className="textField"
                                autoComplete="off"
                                type="text"
                                name="city"
                                label="City"
                                onChange={(e) => this.setState({city: e.target.value})}
                            />
                            <MDBInput
                                className="textField"
                                autoComplete="off"
                                type="text"
                                name="link"
                                label="Cross-post Link"
                                onChange={(e) => this.setState({link: e.target.value})}
                            />
                            <SubmitButton id="create-event" text="Submit" type={"createEvent"} eventName={this.state.eventName} exDescription={this.state.exDescription} 
                            inDescription={this.state.inDescription} address={this.state.address} city={this.state.city} link={this.state.link}
                            />
                        </form>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}

export default CreateEventPage