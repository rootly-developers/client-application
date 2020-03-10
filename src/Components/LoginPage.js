import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
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
        {console.log(this.props.location)}
        return(
            <div id="login-page">
                <form onSubmit={this.handleSubmit} id="login-form">
                    <h1>Login</h1>
                    <div className="grey-text">
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
                        type="text"
                        name="password"
                        label="Password"
                        value={this.state.lastName}
                        onChange={(e) => this.setState({password: e.target.value})}
                    />
                    <button type="submit" className="save-button">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage