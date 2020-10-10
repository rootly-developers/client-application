import React, { useState } from 'react';
import SubmitButton from './SubmitButton.js'

import {  MDBInput, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import axios from "axios";
import './styles/SignUpPage.css'

export default function SignUpPage(props) {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        password: '',
        passwordVerify: '',
        city: ''
    });

    function handleSignUpRequest() {
        const {firstName, lastName, password, city} = state;
        return new Promise((resolve, reject) => {
            axios.post(`http://localhost:8080/signup`, {
                email: props.location.email, password: password
            })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    console.log(res.data.token);
                  axios.post(`http://localhost:8080/users`, {
                    firstName: firstName, lastName: lastName, city: city, token: res.data.token
                  })
                  .then((res) => {
                      console.log(res);
                      if (res.status == 200) {
                          resolve({redirectPath: "/verify", params: {email: props.location.email}});
                      }
                  })
                }
            })
        })
    }

    return(
        <MDBContainer id="signup-page">
            <h1>New to the club huh?</h1>
            <form>
                <MDBRow>
                    <MDBCol size="6">
                        <MDBInput 
                            label="First Name:"
                            type="text"
                            value={state.firstName}
                            onChange={(e) => setState({...state, firstName: e.target.value})}
                        />
                    </MDBCol>

                    <MDBCol size="6">
                        <MDBInput 
                            label="Password:"
                            type="password"
                            value={state.password}
                            onChange={(e) => setState({...state, password: e.target.value})}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="6">
                        <MDBInput 
                            label="Last Name:"
                            type="text"
                            value={state.lastName}
                            onChange={(e) => setState({...state, lastName: e.target.value})}
                        />
                    </MDBCol>
                    <MDBCol size="6">
                        <MDBInput 
                            label="Re-type Password:"
                            type="password"
                            value={state.passwordVerify}
                            onChange={(e) => setState({...state, passwordVerify: e.target.value})}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="6">
                            <MDBInput 
                                label="City based in:"
                                type="text"
                                value={state.city}
                                onChange={(e) => setState({...state, city: e.target.value})}
                            />
                    </MDBCol>

                    <MDBCol size="6" id="signup-btn-col">
                        <SubmitButton className="btn" id="signup-btn" text="SIGN UP" handleAPICall={handleSignUpRequest} />
                    </MDBCol>
                </MDBRow>
            </form>
        </MDBContainer>
    );
}