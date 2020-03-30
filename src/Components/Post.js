import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './styles/Post.css'

const Post = (props) => {
    return (
        <MDBRow className="post">
            <MDBCol size="1">
                <img src="default-avatar.jpg" className="post-img"></img>
            </MDBCol>

            <MDBCol size="7" className="post-main-section">
                <MDBRow>
                    <MDBCol size="6" className="post-top-row">
                        <h5 className="post-user">{props.user}</h5>
                        <MDBIcon far icon="hand-paper" size="lg" className="deep-purple-text hand-icon" />
                        <p className="post-date">{props.date}</p>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="12">
                        <p className="post-message">{props.message}</p>
                    </MDBCol>
                </MDBRow>
            </MDBCol>

            <MDBCol size="4" className="post-right-bar">
                <img src="default-avatar.jpg" className="message-icon"></img>
                <img src="default-avatar.jpg" className="message-icon"></img>
                <img src="default-avatar.jpg" className="message-icon"></img>
                <p className="thumb-count">12</p>
                <MDBIcon far icon="thumbs-up" size="lg" className="deep-purple-text thumb-icon" />
            </MDBCol>
        </MDBRow>
    );
  }
  
  export default Post