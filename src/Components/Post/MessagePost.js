import React, { useState, useEffect, useContext } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './styles/MessagePost.css'
import axios from "axios";
import { UserContext } from '../../contexts/UserContext';


export default function MessagePost(props) {
    const [thumbCount, setThumbCount] = useState(0);
    const [isToggleOn, setIsToggleOn] = useState(true);
    const { user, token } = useContext(UserContext).userData;
    const { eventId, id, upvoteUsers } = props;

    useEffect(() => {
        const userName = `${user.firstName} ${user.lastName}`;
        setThumbCount(Number(props.upvoteCount));
        setIsToggleOn(userName in upvoteUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function toggleThumbsUp() {
        const userName = `${user.firstName} ${user.lastName}`;
        axios.put(`http://localhost:8080/events/${eventId}/threads/${id}/upvotes`, {
            token, isAdd: !isToggleOn, username: userName
        })
        .then(res => {
            if(res.status == 200) {
                const newIsToggleOn = !isToggleOn;
                const newThumbCount = newIsToggleOn ? (thumbCount + 1):(thumbCount - 1);
                setThumbCount(newThumbCount);
                setIsToggleOn(newIsToggleOn);
            }
        });
    }

    function handleShowCommentsClick() {
        props.toggleShowComments(props.id);
    }

    const userIcon = props.type == "BOT_POST" ? "hand-paper": "star";
    let iconClass = props.type == "BOT_POST" ? "deep-purple-text user-icon": "amber-text user-icon";
    return(
        <MDBRow className="message-post">
            <MDBCol size="1">
                <img src="/default-avatar.jpg" className="message-post-img"></img>
            </MDBCol>

            <MDBCol size="9" className="message-post-main-section">
                <MDBRow>
                    <MDBCol size="12" className="message-post-top-row">
                        <h5 className="message-post-user">{props.username}</h5>
                        <MDBIcon far icon={userIcon} size="lg" className={iconClass} />
                        <p className="message-post-date">{props.date}</p>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="12">
                        <p className="message-post-message">{props.content}</p>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="12">
                        <MDBIcon 
                            icon="reply"
                            onClick={handleShowCommentsClick} 
                            className="grey-text message-show-comments-btn"
                        />
                    </MDBCol>
                </MDBRow>
            </MDBCol>

            <MDBCol size="2" className="message-post-right-bar">
                <p className="thumb-count">{thumbCount}</p>
                <MDBIcon far icon="thumbs-up" size="lg" className="deep-purple-text thumb-icon" onClick={toggleThumbsUp}/>
            </MDBCol>
        </MDBRow>
    );
}