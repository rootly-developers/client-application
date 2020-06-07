import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './styles/MessagePost.css'
import axios from "axios";


class MessagePost extends Component {
    constructor(){
        super();
        this.state = {
            thumbCount: 0,
            isToggleOn: true,
        };
        this.toggleThumbsUp = this.toggleThumbsUp.bind(this);
    }

    componentDidMount() {
        const { user, upvoteUsers } = this.props;
        const userName = `${user.firstName} ${user.lastName}`;
        this.setState({
            thumbCount: Number(this.props.upvoteCount),
            isToggleOn: userName in upvoteUsers
        });
    }

    toggleThumbsUp() {
        const {eventId, token, id, user} = this.props;
        const userName = `${user.firstName} ${user.lastName}`;
        axios.put(`http://localhost:8080/events/${eventId}/threads/${id}/upvotes`, {
            token, isAdd: !this.state.isToggleOn, username: userName
        })
        .then(res => {
            if(res.status == 200) {
                console.log("UPVOTED");
                const isToggleOn = !this.state.isToggleOn;
                const thumbCount = this.state.thumbCount;
                const newThumbCount = isToggleOn ? (thumbCount + 1):(thumbCount - 1);
                this.setState({thumbCount: newThumbCount, isToggleOn});
            }
        });
    }

    render() {
        const userIcon = this.props.type == "BOT_POST" ? "hand-paper": "star";
        let iconClass = this.props.type == "BOT_POST" ? "deep-purple-text user-icon": "amber-text user-icon";
        return(
            <MDBRow className="message-post">
                <MDBCol size="1">
                    <img src="/default-avatar.jpg" className="message-post-img"></img>
                </MDBCol>

                <MDBCol size="7" className="message-post-main-section">
                    <MDBRow>
                        <MDBCol size="12" className="message-post-top-row">
                            <h5 className="message-post-user">{this.props.postUser}</h5>
                            <MDBIcon far icon={userIcon} size="lg" className={iconClass} />
                            <p className="message-post-date">{this.props.date}</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="12">
                            <p className="message-post-message">{this.props.content}</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

                <MDBCol size="4" className="message-post-right-bar">
                    <img src="/default-avatar.jpg" className="message-icon"></img>
                    <img src="/default-avatar.jpg" className="message-icon"></img>
                    <img src="/default-avatar.jpg" className="message-icon"></img>
                    <p className="thumb-count">{this.state.thumbCount}</p>
                    <MDBIcon far icon="thumbs-up" size="lg" className="deep-purple-text thumb-icon" onClick={this.toggleThumbsUp}/>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default MessagePost