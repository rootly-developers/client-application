import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import SubmitButton from './SubmitButton.js'
import axios from "axios";
import './styles/SignUpPage.css'

class SignUpPage extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <div>
                <h1>SignUp Page</h1>
                <form>
                    <input
                        className="emailInput"
                        autoComplete="off"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                    />
                    <input
                        className="passwordInput"
                        autoComplete="off"
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.lastName}
                        onChange={(e) => this.setState({password: e.target.value})}
                    />
                    <SubmitButton email={this.state.email} password={this.state.password}/>
                </form>
            </div>
        );
    }
}

export default SignUpPage