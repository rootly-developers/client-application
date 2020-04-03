import React, { Component } from 'react';
import './styles/VerifyPage.css'

class VerifyPage extends Component {
    constructor(){
        super();
    }
    render() {
        return(
            <div id="verify-page">
                <h1>Verification Sent To:</h1>
                <p>{this.props.location.email} d{this.props.location.test}</p>
                <h1>See you in a bit!</h1>
            </div>
        );
    }
}

export default VerifyPage