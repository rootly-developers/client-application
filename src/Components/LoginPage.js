import React, { Component } from 'react';
import { MDBInput, MDBContainer } from 'mdbreact';
import SignInBtn from './SignInBtn';
import axios from "axios";
import './styles/LoginPage.css'

class LoginPage extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:8080/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {console.log(res)})
    }

    render() {
        return(
            <MDBContainer id="login-page">
                <h1>Sign in</h1>
                <form onSubmit={this.handleSubmit} id="login-form">
                    <MDBInput
                        className="emailInput"
                        autoComplete="off"
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
                        label="Password"
                        value={this.state.lastName}
                        onChange={(e) => this.setState({password: e.target.value})}
                    />
                    <SignInBtn email={this.state.email} password={this.state.password}/>
                </form>
            </MDBContainer>
        );
    }
}

export default LoginPage