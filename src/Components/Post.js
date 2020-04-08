import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import MessagePost from './MessagePost.js'
import ActionPost from './ActionPost.js'
import './styles/Post.css'


const Post = (props) => {
    let post = null;
    const threadType = props.threadType;
    if (threadType == "message") {
        const { user, date, message } = props;
        post = <MessagePost user={user} date={date} message={message} />
    } 
    else if (threadType == "action") {
        post = <ActionPost action={props.action}/>
    }
    else {
        console.error("Not a valid thread type")
    }
    return (
        <div>
            {post}
        </div>
    );
  }
  
  export default Post