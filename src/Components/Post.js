import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import MessagePost from './MessagePost.js'
import ActionPost from './ActionPost.js'
import './styles/Post.css'


const Post = (props) => {
    let post = null;
    const { username, date, content, 
            threadType, upvoteCount, id,
            eventId, token, upvoteUsers, user
        } = props;
    if (threadType == "BOT_POST" || threadType == "USER_POST") {
        post = <MessagePost 
                    postUser={username}
                    date={date}
                    content={content}
                    type={threadType}
                    id={id}
                    upvoteCount={upvoteCount}
                    upvoteUsers={upvoteUsers}
                    eventId={eventId}
                    token={token}
                    user={user}
               />
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