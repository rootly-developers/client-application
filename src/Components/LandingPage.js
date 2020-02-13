import React, { Component } from 'react';
import axios from 'axios';
import './styles/LandingPage.css'

class LandingPage extends Component {
    constructor(){
        super();
        this.state = {
            msg: ""
        }
    }

    componentWillMount() {
        axios.get('http://localhost:8080/ping?name=jackson')
        .then(res => {
            const msg = res.data;
            this.setState({ msg })
        })
    }

    render() {
        return(
            <div>
                <h1>Landing Page</h1>
                <p> {this.state.msg} </p>
            </div>
        );
    }
}

export default LandingPage