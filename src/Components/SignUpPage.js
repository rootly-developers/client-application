import React, { Component } from 'react';
import SubmitButton from './SubmitButton.js'

import {  MDBInput, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import axios from "axios";
import './styles/SignUpPage.css'

class SignUpPage extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            passwordVerify: '',
            city: ""
        }
        this.handleSignUpRequest = this.handleSignUpRequest.bind(this);
    }

    handleSignUpRequest() {
        const {firstName, lastName, password, city} = this.state;
        return new Promise((resolve, reject) => {
            axios.post(`http://localhost:8080/signup`, {
                email: this.props.email, password: password
            })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  axios.post(`http://localhost:8080/users`, {
                    firstName: firstName, lastName: lastName, city: city
                  })
                  .then((res) => {
                      console.log(res);
                      if (res.status == 200) {
                          resolve({redirectPath: "/verify", params: {email: this.props.location.email}});
                      }
                  })
                }
            })
        })
    }

    render() {
        return(
            <MDBContainer id="signup-page">
                <h1>New to the club huh?</h1>
                <form>
                    <MDBRow>
                        <MDBCol size="6">
                            <MDBInput 
                                label="First Name:"
                                type="text"
                                value={this.state.firstName}
                                onChange={(e) => this.setState({firstName: e.target.value})}
                            />
                        </MDBCol>

                        <MDBCol size="6">
                            <MDBInput 
                                label="Password:"
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.setState({password: e.target.value})}
                            />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="6">
                            <MDBInput 
                                label="Last Name:"
                                type="text"
                                value={this.state.lastName}
                                onChange={(e) => this.setState({lastName: e.target.value})}
                            />
                        </MDBCol>
                        <MDBCol size="6">
                            <MDBInput 
                                label="Re-type Password:"
                                type="password"
                                value={this.state.passwordVerify}
                                onChange={(e) => this.setState({passwordVerify: e.target.value})}
                            />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="6">
                                <MDBInput 
                                    label="City based in:"
                                    type="text"
                                    value={this.state.city}
                                    onChange={(e) => this.setState({city: e.target.value})}
                                />
                        </MDBCol>

                        <MDBCol size="6" id="signup-btn-col">
                            <SubmitButton id="signup-btn" text="SIGN UP" handleAPICall={this.handleSignUpRequest} />
                        </MDBCol>
                    </MDBRow>
                </form>
            </MDBContainer>
        );
    }
}

export default SignUpPage