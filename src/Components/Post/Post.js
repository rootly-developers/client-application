import React from 'react';
import MessagePost from './MessagePost.js'
import ActionPost from './ActionPost.js'
import './styles/Post.css'


const Post = (props) => {
    let post = null;
    const { threadType, content } = props;

    if (threadType === "BOT_POST" || threadType === "USER_POST") {
        post = <MessagePost {...props} />
    }
    else if (threadType === "EVENT_UPDATE") {
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