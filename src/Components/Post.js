import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import MessagePost from './MessagePost.js'
import ActionPost from './ActionPost.js'
import './styles/Post.css'


const Post = (props) => {
    let post = null;
    const threadType = props.threadType;
    const { username, date, content } = props;
    if (threadType == "BOT_POST" || threadType == "USER_POST") {
        post = <MessagePost username={username} date={date} content={content} type={threadType} />
    }
    else if (threadType == "EVENT_UPDATE") {
        post = <ActionPost content={content}/>
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