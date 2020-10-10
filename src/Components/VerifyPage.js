import React from 'react';
import './styles/VerifyPage.css'

export default function VerifyPage(props) {
    return(
        <div id="verify-page">
            <h1>Verification Sent To:</h1>
            <p>{props.location.email}</p>
            <h1>See you in a bit!</h1>
        </div>
    );
}