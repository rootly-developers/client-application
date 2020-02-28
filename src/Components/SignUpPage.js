import React, { Component } from 'react';
import axios from "axios";
import './styles/SignUpPage.css'

class SignUpPage extends Component {
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
        
        axios.post('http://localhost:8080/signup', {
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {console.log(res)})
    }

    render() {
        return(
            <div>
                <h1>SignUp Page</h1>
                <form onSubmit={this.handleSubmit}>
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
                    <button type="submit" className="save-button">Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUpPage