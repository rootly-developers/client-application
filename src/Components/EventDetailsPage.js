import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBInput, MDBBtn } from "mdbreact";
import Post from './Post.js';
import './styles/EventDetailsPage.css';
import { formatTime } from '../helpers.js';
import axios from "axios";

/* TODOS: 
    - add timestamp and other fields for new posts 
    - add comments to threads functionality
    - what is user_id and how do i get it?
*/

class EventDetailsPage extends Component {
    constructor(){
        super();
        this.state = {
            renderPage: false,
            title: "",
            description: "",
            numAttendees: 0,
            maxAttendees: 0,
            address: "",
            messageInput: "",
            posts: []
        }
        this.handlePostClick = this.handlePostClick.bind(this);
    }

    componentDidMount() {
        const { eventId, token } = this.props.location;
        axios({
            method: 'get',
            url: `http://localhost:8080/events/${eventId}`,
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            })
            .then(res => {
                if(res.status == 200) {
                    const event = res.data.event;
                    const eventDetails = event.event;
                    const threads = event.threads;
                    let posts = this.state.posts.slice();
                    threads.forEach(thread => {
                        posts.push(thread);
                    })
                    
                    const startTime = formatTime(eventDetails.start_time);
                    const endTime = formatTime(eventDetails.end_time);
                    this.setState({
                        title: eventDetails.title,
                        description: eventDetails.description,
                        numAttendees: eventDetails.num_attendees,
                        maxAttendees: eventDetails.max_attendees,
                        address: eventDetails.address,
                        startTime,
                        endTime,
                        posts: posts
                    });
                }
            })
    }

    handlePostClick() {
        const { eventId, token, user } = this.props.location;
        let newPosts = this.state.posts.slice();
        const content = this.state.messageInput;
        const username = `${user.firstName} ${user.lastName}`;
        axios.post(`http://localhost:8080/events/${eventId}/threads`, {
            token, content, username
        })
        .then(res => {
            const newPost = {
                id: res.data.id,
                content,
                username,
                user_id: null,
                thread_type: "USER_POST",
                upvote_count: 0,
                upvote_usernames: [],
                upvote_userids: [],
                comments_content: [],
                comments_created: []
            };
            newPosts.push(newPost);
            this.setState({posts: newPosts, messageInput: ""});
        })
    }

    render() {
        const { title, description, numAttendees, maxAttendees, address, startTime, endTime } = this.state;
        let { eventId, token } = this.props.location;
        const posts = this.state.posts;
        let postCards = posts.map((post, i) => {
            return  <MDBRow>
                        <MDBCol size="12">
                            <Post username={post.username}
                                  date="8:00pm Jan 21"
                                  content={post.content} 
                                  key={i}
                                  threadType={post.thread_type}
                                  upvoteCount={post.upvote_count}
                                  upvoteUsers={post.upvote_usernames}
                                  id={post.id}
                                  token={token}
                                  eventId={eventId}
                                  user={this.props.location.user}
                            />
                        </MDBCol>
                     </MDBRow>
        });
        return(
            <div className="app-page">
                <div className="app-page-fill"></div>
                <div className="app-main-section" id="event-details-main">
                    <div id="event-details-header">
                        <h1 className="app-page-header">{title}</h1>
                        <MDBBtn id="leave-event-btn">LEAVE EVENT</MDBBtn>
                    </div>     
                    <MDBCardBody className="page-body" id="event-details-body">
                        <MDBRow>
                            <MDBCol size="7">
                                <p id="event-details-description">
                                {description}
                                </p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="2">
                                <h3>Host:</h3>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                            </MDBCol>

                            <MDBCol size="5">
                                <h3>Attendees: {numAttendees}/{maxAttendees}</h3>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                            </MDBCol>

                            <MDBCol size="2"></MDBCol>
                            
                            <MDBCol size="3">
                                <h3 id="event-details-date">{startTime} - {endTime}</h3>
                                <h4 id="event-details-address">{address}</h4>
                            </MDBCol>
                        </MDBRow>

                        <h2 id="discussion-header">Discussion</h2>

                        <MDBRow id="post-message-bar">
                            <MDBCol size="10">
                                <MDBInput 
                                    label="Some text..."
                                    value={this.state.messageInput}
                                    onChange={(e) => this.setState({messageInput: e.target.value})}
                                />
                            </MDBCol>

                            <MDBCol size="2">
                                <MDBBtn id="post-btn" onClick={this.handlePostClick}>POST</MDBBtn>
                            </MDBCol>
                        </MDBRow>

                        {postCards}
                    </MDBCardBody>
                </div>
            </div>
        );
    }
}

export default EventDetailsPage