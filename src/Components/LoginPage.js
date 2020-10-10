import React, { useState } from 'react';
import { MDBInput, MDBContainer } from 'mdbreact';
import SubmitButton from './SubmitButton';
import axios from "axios";
import './styles/LoginPage.css'


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLoginRequest() {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: "http://localhost:8080/users/verify",
                headers: {
                  'Content-Type': 'application/json',
                  'email': email,
                  'password': password
                },
              })
              .then((res) => {
                if (res.status === 200) {
                    if(res.data.isVerified) {
                        axios.post('http://localhost:8080/login', {
                            email: email,
                            password: password
                        })  
                        .then((res) => {
                            console.log("user data")
                            console.log(res.data);
                            let params = {
                                token: res.data.token,
                                eventsList: res.data.eventsList,
                                user: res.data.user
                            }
                            this.props.userCallback(res.data);
                            resolve({ redirectPath: "/events", params: params});
                        })
                    }
                    else {
                        resolve({ redirectPath: "/verify", params: { email: email }});
                    }
                }
              })
        })
    }

    return(
        <MDBContainer id="login-page">
            <h1>Sign in</h1>
            <form id="login-form">
                <MDBInput
                    className="emailInput"
                    autoComplete="off"
                    icon="envelope"
                    type="text"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                    className="passwordInput"
                    autoComplete="off"
                    type="password"
                    name="password"
                    icon="lock"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton id="signin-btn" text="GO!" handleAPICall={handleLoginRequest} />
            </form>
        </MDBContainer>
    );
}