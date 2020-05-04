import React, { Component } from 'react';
import { MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './styles/CreateEventPage.css';
import SubmitButton from './SubmitButton';
import axios from "axios";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
            address: '',
            city: '',
            region: '',
            date: new Date(),
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
            address: this.state.address,
            city: this.state.city,
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
        return(
            <div className="app-page" id="create-page">
                <div className="app-page-fill"></div>
                <div className="app-main-section">
                    <h1 className="app-page-header">Make Event</h1>
                    <MDBContainer id="create-page-container">
                        <form id="create-form">
                            <MDBRow>
                               <MDBCol size="3">
                                    <h4>Event Name:</h4>
                               </MDBCol>
                               <MDBCol size="9">
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
                                    <h4>External Description:</h4>
                               </MDBCol>
                               <MDBCol size="9">
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
                                    <h4>Internal Description:</h4>
                               </MDBCol>
                               <MDBCol size="9">
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
                                    <h4>Address:</h4>
                               </MDBCol>
                               <MDBCol size="9">
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
                                    <h4>Region:</h4>
                               </MDBCol>
                               <MDBCol size="9">
                                    <Select options={options} onChange={(e) => this.setState({region: this.value})}/>
                               </MDBCol>   
                            </MDBRow>

                            <MDBRow>
                               <MDBCol size="3">
                                    <h4>City:</h4>
                               </MDBCol>
                               <MDBCol size="9">
                                    <MDBInput
                                        className="textField"
                                        autoComplete="off"
                                        type="text"
                                        name="city"
                                        onChange={(e) => this.setState({city: e.target.value})}
                                    /> 
                                </MDBCol>   
                            </MDBRow>

                            <MDBRow>
                               <MDBCol size="3">
                                    <h4>Date:</h4>
                               </MDBCol>
                               <MDBCol size="9">
                                    <DatePicker
                                        selected={this.state.date}
                                        onChange={this.handleChange}
                                    />
                                </MDBCol>   
                            </MDBRow>

                            <MDBRow>
                               <MDBCol size="3">
                                    <h4>Cross-post Link:</h4>
                               </MDBCol>
                               <MDBCol size="9">
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