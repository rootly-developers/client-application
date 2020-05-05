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
            cap: '',
            date: new Date(),
            startTime: '',
            endTime: '',
            link: ''
        }
<<<<<<< HEAD
=======
        this.handleAPICall = this.handleAPICall.bind(this);
    }

    handleChange = date => {
        this.setState({
          date: date
        });
      };

    handleAPICall() {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/events', {
            eventName: this.state.eventName,
            exDescription: this.state.exDescription,
            inDescription: this.state.inDescription,
            code: this.state.code,
            address: this.state.address,
            region: this.state.region,
            date: this.state.date,
            cap: this.state.cap,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            link: this.state.link
            // TODO: this should have more data but not sure what to do yet for elements that exist only in mdb pro (select/datepicker/timepicker)
            })
            .then((res) => {
                if (res.status == 200) {
                    console.log(res);
                    let redirectPath = "/" + res.eventData;
                    resolve({redirectPath});
                }
                else {
                    reject("Error");
                }
            })
        })
>>>>>>> import/add datepicker for date field
    }

    render() {
        const INPUT_SIZE = 7;
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
                                        onChange={this.handleChange}
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