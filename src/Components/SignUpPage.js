import React, { Component } from 'react';
import axios from "axios";
import './styles/SignUpPage.css'

class SignUpPage extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        axios.post('http://localhost:8080', {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })
        .then((res) => {console.log(res)})
    }

    render() {
        return(
            <div>
                <h1>SignUp Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="firstNameInput"
                        autoComplete="off"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={(e) => this.setState({firstName: e.target.value})}
                    />
                    <input
                        className="lastNameInput"
                        autoComplete="off"
                        type="text"
                        name="lasttName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={(e) => this.setState({lastName: e.target.value})}
                    />
                    <button type="submit" className="save-button">Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUpPage