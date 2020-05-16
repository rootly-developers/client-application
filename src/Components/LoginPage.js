import React, { Component } from 'react';
import { MDBInput, MDBContainer } from 'mdbreact';
import SubmitButton from './SubmitButton';
import axios from "axios";
import './styles/LoginPage.css'

class LoginPage extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
    }

    handleLoginRequest() {
        let { email, password } = this.state;
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
                if (res.status == 200) {
                    if(res.data.isVerified) {
                        axios.post('http://localhost:8080/login', {
                            email: this.state.email,
                            password: this.state.password
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

    render() {
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
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                    />
                    <MDBInput
                        className="passwordInput"
                        autoComplete="off"
                        type="password"
                        name="password"
                        icon="lock"
                        label="Password"
                        value={this.state.lastName}
                        onChange={(e) => this.setState({password: e.target.value})}
                    />
                    <SubmitButton id="signin-btn" text="GO!" handleAPICall={this.handleLoginRequest} />
                </form>
            </MDBContainer>
        );
    }
}

export default LoginPage