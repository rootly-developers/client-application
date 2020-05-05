import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './styles/CreateEventPage.css';
import SubmitButton from './SubmitButton';
import axios from "axios";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import 'rc-time-picker/assets/index.css';

const options = [
    { value: 'San Francisco', label: 'San Francisco' },
    { value: 'Toronto', label: 'Toronto' },
    { value: 'Peterborough', label: 'Peterborough' }
  ]
  
class CreateEventPage extends Component {
    constructor(){
        super();
        this.state = {
            eventName: '',
            exDescription: '',
            inDescription: '',
            code: '',
            address: '',
            region: '',
            cap: 1,
            date: new Date(),
            startTime: '',
            endTime: '',
            link: '',
            avatar: ''
        }
        this.handleAPICall = this.handleAPICall.bind(this);
    }

    handleAvatarSelect = (avatar) => {
        this.setState({avatar: avatar})
    }

    handleAPICall() {
        return new Promise((resolve, reject) => {
            console.log(this.props.token);
            axios.post('http://localhost:8080/events', {
                token: "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ODQ4YjVhZmYyZDUyMDEzMzFhNTQ3ZDE5MDZlNWFhZGY2NTEzYzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9vdGx5LTExMjM1ODEzIiwiYXVkIjoicm9vdGx5LTExMjM1ODEzIiwiYXV0aF90aW1lIjoxNTg4NjU5NzM4LCJ1c2VyX2lkIjoiZDVid2ZnYnVYa1BPUEpEQjdkaEE5Wk9QUFNwMiIsInN1YiI6ImQ1YndmZ2J1WGtQT1BKREI3ZGhBOVpPUFBTcDIiLCJpYXQiOjE1ODg2NTk3MzgsImV4cCI6MTU4ODY2MzMzOCwiZW1haWwiOiJkdGNoZXVuZ0B1d2F0ZXJsb28uY2EiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJkdGNoZXVuZ0B1d2F0ZXJsb28uY2EiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NlpaoTj4J3piEWqC9fHYG04Bi0GmlyJVTY5RQOB8tvgotu7sD_nMjK1YViEFRpm3TH4BLuAS2M1OTT2hs8mXYTR05lVIF6_yf5WIun4wPmen-BGqVEhIADqhR8p8_y79H4daDRc9q86DsYLObwA50w9VmB821WmwtUDMEdLVRLc-KcKWf4lS7A6u3WXrJ9mbE-3x_dYYzBEopg4ClkkYyVX4XqxPTDETbZSFRwTIfgY8_j1qzHAZC1C3I_bBgrrtftKsVZSAiovqbZsdaMHEVVa64fA1zGDsUbYnqt2G8f5gNsiL3okx-a4qoXAtUCln2PSdlV4Gil_mwLWk3cLxwQ",
                organizerName: "Darren Cheung",
                title: this.state.eventName,
                description: this.state.exDescription,
                address: this.state.address,
                city: this.state.region,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                maxAttendees: this.state.cap,
                eventType: this.state.avatar
           })
            .then((res) => {
                if (res.status == 200) {
                    console.log(res);
                    let redirectPath = "/" + res.data.eventId;
                    resolve({redirectPath});
                }
                else {
                    reject("Error");
                }
            })
        })
    }

    render() {
        const INPUT_SIZE = "7";
        const INPUT_SIZE_SMALL = 3;
        return(
            <div className="app-page" id="create-page">
                <div className="app-page-fill"></div>
                <div className="app-main-section">
                    <h1 className="app-page-header">Make Event</h1>
                    <MDBContainer id="create-page-container">
                        <form id="create-form">
                            <MDBRow>
                               <MDBCol size="3">
                                    <h5>Event Name:</h5>
                               </MDBCol>
                               <MDBCol size={INPUT_SIZE}>
                                    <MDBInput
                                    className="textField"
                                    autoComplete="off"
                                    type="text"
                                    name="eventName"
                                    onChange={(e) => this.setState({eventName: e.target.value})}
                                    /> 
                                </MDBCol>   
                            </MDBRow>
                            
                            <MDBRow>
                               <MDBCol size="3">
                                    <h5>Why this event?</h5>
                               </MDBCol>
                               <MDBCol size={INPUT_SIZE}>
                                    <MDBInput
                                        className="textField"
                                        autoComplete="off"
                                        type="text"
                                        name="exDescription"
                                        onChange={(e) => this.setState({exDescription: e.target.value})}
                                    />
                                </MDBCol>   
                            </MDBRow>
                           
                            <MDBRow>
                               <MDBCol size="3">
                                    <h5>Details for guests:</h5>
                               </MDBCol>
                               <MDBCol size={INPUT_SIZE}>
                                    <MDBInput
                                        className="textField"
                                        autoComplete="off"
                                        type="text"
                                        name="inDescription"
                                        onChange={(e) => this.setState({inDescription: e.target.value})}
                                    /> 
                                </MDBCol>   
                            </MDBRow>

                            <MDBRow>
                               <MDBCol size="3">
                                    <h5>Postal / Zip code: (Shown to public)</h5>
                               </MDBCol>
                               <MDBCol size={INPUT_SIZE}>
                                    <MDBInput
                                        className="textField"
                                        autoComplete="off"
                                        type="text"
                                        name="code"
                                        onChange={(e) => this.setState({code: e.target.value})}
                                    /> 
                                </MDBCol>   
                            </MDBRow>

                            <MDBRow>
                               <MDBCol size="3">
                                    <h5>Address: <br></br> (Shown to public)</h5>
                               </MDBCol>
                               <MDBCol size={INPUT_SIZE}>
                                    <MDBInput
                                        className="textField"
                                        autoComplete="off"
                                        type="text"
                                        name="address"
                                        onChange={(e) => this.setState({address: e.target.value})}
                                    /> 
                                </MDBCol>   
                            </MDBRow>

                            <MDBRow>
                               <MDBCol size="3">
                                    <h5>Region:</h5>
                               </MDBCol>
                               <MDBCol size={INPUT_SIZE}>
                                    <Select className="md-form" options={options} onChange={(e) => this.setState({region: this.value})}/>
                               </MDBCol>   
                            </MDBRow>

                            <MDBRow>
                                <MDBCol size="2">
                                    <h5>Party Cap:</h5>
                               </MDBCol>
                               <MDBCol size="3">
                                    <MDBInput
                                        className="textField md-form"
                                        autoComplete="off"
                                        type="number"
                                        name="cap"
                                        onChange={(e) => this.setState({cap: e.target.value})}
                                    />
                                </MDBCol> 

                               <MDBCol size="2">
                                    <h5>Date:</h5>
                               </MDBCol>
                               <MDBCol size="3">
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={date => this.setState({date: date})}
                                        className="md-form"
                                    />
                                </MDBCol>   
                            </MDBRow>

                            <MDBRow>
                               <MDBCol size="2">
                                    <h5>Start Time:</h5>
                               </MDBCol>
                               <MDBCol size="3">
                                    <TimePicker
                                        selected={this.state.startTime}
                                        onChange={(e) => this.setState({endTime: this.value})}
                                    />
                                </MDBCol>   
                                <MDBCol size="2">
                                    <h5>End Time:</h5>
                               </MDBCol>
                               <MDBCol size="3">
                                    <TimePicker
                                        selected={this.state.endTime}
                                        onChange={(e) => this.setState({startTime: this.value})}
                                    />
                                </MDBCol>  
                            </MDBRow>

                            <br></br>

                            <MDBRow>
                               <MDBCol size="3">
                                    <h5>Cross-post Link:</h5>
                               </MDBCol>
                               <MDBCol size={INPUT_SIZE}>
                                    <MDBInput
                                        className="textField"
                                        autoComplete="off"
                                        type="text"
                                        name="link"
                                        onChange={(e) => this.setState({link: e.target.value})}
                                    />
                                </MDBCol>   
                            </MDBRow>

<<<<<<< HEAD
                            <SubmitButton id="create-event" text="Submit" type={"createEvent"} eventName={this.state.eventName} exDescription={this.state.exDescription} 
                            inDescription={this.state.inDescription} address={this.state.address} city={this.state.city} link={this.state.link}
=======
                            <MDBRow>
                               <MDBCol size="3">
                                    <h5>Event Avatar: {this.state.avatar}</h5>
                               </MDBCol>
                               <MDBCol size="9">
                                    <img src="/coffee.svg" className="img-fluid" id="coffee" onClick={(e) => this.handleAvatarSelect("coffee")}></img>
                                    <img src="/bulb.png" className="img-fluid" id="bulb" onClick={(e) => this.handleAvatarSelect("COFFEE")}></img>
                                    <img src="/dice.png" className="img-fluid" id="dice" onClick={(e) => this.handleAvatarSelect("dice")}></img>
                                    <img src="/mask.png" className="img-fluid" id="mask" onClick={(e) => this.handleAvatarSelect("mask")}></img>
                                    <img src="/football.png" className="img-fluid" id="football" onClick={(e) => this.handleAvatarSelect("football")}></img>
                                    <img src="/pyramid.png" className="img-fluid" id="pyramid" onClick={(e) => this.handleAvatarSelect("pyramid")}></img>
                                </MDBCol>   
                            </MDBRow>

                            <SubmitButton id="create-event" text="Submit" handleAPICall={this.handleAPICall}
>>>>>>> add hacky avatar icon select
                            /> 
                        </form>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}

export default CreateEventPage