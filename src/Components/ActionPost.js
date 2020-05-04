import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './styles/ActionPost.css'


const ActionPost = (props) => {
    return (
        <MDBRow className="message-post">
            <MDBCol size="1" className="action-post-margin"></MDBCol>
            <MDBCol size="11" className="action-post-main">
                <MDBIcon far icon="bell" className="grey-text action-post-icon" size="2x" />
                <h5>{props.action}</h5>
            </MDBCol>
        </MDBRow>
    );
  }
  
  export default ActionPost