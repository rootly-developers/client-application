import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './styles/CreateEventPage.css';
import SubmitButton from './SubmitButton';
import axios from "axios";
import TextField from '@material-ui/core/TextField';


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

    handleAvatarSelect = (avatar) => {this.setState({avatar: avatar})}

    handleAPICall() {
        return new Promise((resolve, reject) => {
            console.log("start " + this.state.startTime);
            console.log("end " + this.state.endTime);
            console.log("date " + this.state.date);
            let startTime = new Date('1970-01-01T' + this.state.startTime + 'Z');
            let endTime = new Date('1970-01-01T' + this.state.endTime + 'Z');        
            let startMoment = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate(), 
                    startTime.getHours(), startTime.getMinutes(), startTime.getSeconds());
            let endMoment = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate(), 
                    endTime.getHours(), endTime.getMinutes(), endTime.getSeconds());
            

            axios.post('http://localhost:8080/events', {
                token: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZjMmM4YmIyNmE3OGM0M2JkODYzNzA1YjNkNzkyMWI0ZTY0MjVkNTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9vdGx5LTExMjM1ODEzIiwiYXVkIjoicm9vdGx5LTExMjM1ODEzIiwiYXV0aF90aW1lIjoxNTg5MDU5MDEzLCJ1c2VyX2lkIjoiZDVid2ZnYnVYa1BPUEpEQjdkaEE5Wk9QUFNwMiIsInN1YiI6ImQ1YndmZ2J1WGtQT1BKREI3ZGhBOVpPUFBTcDIiLCJpYXQiOjE1ODkwNTkwMTMsImV4cCI6MTU4OTA2MjYxMywiZW1haWwiOiJkdGNoZXVuZ0B1d2F0ZXJsb28uY2EiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJkdGNoZXVuZ0B1d2F0ZXJsb28uY2EiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mSqYknfrgVaJQZsD1m1_yj7al2aOFp36QnJyjyyOGRenrC8hyYkSdmwA_L6ZQ9gel1pVmBc6wtWholVA-SRfQGH0uWBHEWar3wmTwADQ_fIJZvPySMOPt0vbbfm5Palp1giGM1ZLd66o56CKJ-3z5m2RJHfo6nvDkAgTiSu48BV1OzklXO8571Z2baLtcVK9AEJrYLdeK7dKNyJ8P0g8BigayypLw8TFdDWHgt8ROhC2odRtK2GwkSWuqyx-MH4HLbFm-6hLJKYUaLTgvHnLbE421Kpl7g1zxlQyQAPTDoiWq7j81NijoRgrzD8h5rt308CJXqVPtI3l4bBW84-EPQ",
                organizerName: "Darren Cheung",
                title: this.state.eventName,
                description: this.state.exDescription,
                address: this.state.address,
                city: this.state.region,
                startTime: Math.round(startMoment.getTime()/1000),
                endTime: Math.round(endMoment.getTime()/1000),
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
                                    <TextField
                                        id="date"
                                        type="date"
                                    />
                                </MDBCol>   
                            </MDBRow>

                            <MDBRow>
                               <MDBCol size="2">
                                    <h5>Start Time:</h5>
                               </MDBCol>
                               <MDBCol size="3">
                                    <TextField
                                        id="startTime"
                                        type="time"
                                        onChange={(e) => this.setState({startTime: e.target.value})}
                                        inputProps={{
                                        step: 300
                                        }}
                                    />
                                </MDBCol>   
                                <MDBCol size="2">
                                    <h5>End Time:</h5>
                               </MDBCol>
                               <MDBCol size="3">
                                    <TextField
                                        id="endTime"
                                        type="time"
                                        onChange={(e) => this.setState({endTime: e.target.value})}
                                        inputProps={{
                                        step: 300
                                        }}
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

                            <MDBRow>
                               <MDBCol size="3">
                                    <h5>Event Avatar: {this.state.avatar}</h5>
                               </MDBCol>
                               <MDBCol size="9">
                                    <img src="/coffee.svg" className="img-fluid" id="coffee" onClick={(e) => this.handleAvatarSelect("COFFEE")}></img>
                                    <img src="/bulb.png" className="img-fluid" id="ideas" onClick={(e) => this.handleAvatarSelect("IDEAS")}></img>
                                    <img src="/dice.png" className="img-fluid" id="games" onClick={(e) => this.handleAvatarSelect("GAMES")}></img>
                                    <img src="/mask.png" className="img-fluid" id="theatre" onClick={(e) => this.handleAvatarSelect("THEATRE")}></img>
                                    <img src="/football.png" className="img-fluid" id="sports" onClick={(e) => this.handleAvatarSelect("SPORTS")}></img>
                                    <img src="/pyramid.png" className="img-fluid" id="adventure" onClick={(e) => this.handleAvatarSelect("ADVENTURE")}></img>
                                </MDBCol>   
                            </MDBRow>

                            <SubmitButton id="create-event" text="Submit" handleAPICall={this.handleAPICall}/> 
                        </form>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}

export default CreateEventPage