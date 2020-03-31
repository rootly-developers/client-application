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
            ex_description: '',
            in_description: '',
            ex_description: '',
            address: '',
            city: '',
            link: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:8080/events/new', {
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {console.log(res)})
    }
    render() {
        return(
            <MDBContainer id="create-page">
                <h1>Make Event</h1>
                <form onSubmit={this.handleSubmit} id="create-form">
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
                        name="ex_description"
                        label="External Description"
                        onChange={(e) => this.setState({ex_description: e.target.value})}
                    />
                    <MDBInput
                        className="textField"
                        autoComplete="off"
                        type="text"
                        name="in_description"
                        label="Internal Description"
                        onChange={(e) => this.setState({in_description: e.target.value})}
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
                    <SubmitButton id="create-event" text="Submit" eventName={this.state.eventName} ex_description={this.state.ex_description} 
                    in_description={this.state.in_description} address={this.state.address} city={this.state.city} link={this.state.link}
                    />
                </form>
            </MDBContainer>
        );
    }
}

export default CreateEventPage