import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBInput, MDBBtn } from "mdbreact";
import Post from './Post.js';
import './styles/EventDetailsPage.css';

class EventDetailsPage extends Component {
    constructor(){
        super();
        this.state = {
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

    componentWillMount() {
        
    }

    handlePostClick() {
        const posts = this.state.posts.slice();
        posts.push({message: this.state.messageInput});
        this.setState({posts: posts, messageInput: ""});
    }

    render() {
        let { title, description, numAttendees, maxAttendees, address } = this.state

        const posts = this.state.posts;
        let postCards = posts.map((post, i) => {
            return  <MDBRow>
                        <MDBCol size="12">
                            <Post user="Darren Cheung" date="8:00pm Jan 21"
                                  message={post.message} key={i}
                                  threadType="message"
                            />
                        </MDBCol>
                     </MDBRow>
        });
        return(
            <div className="app-page">
                <div className="app-page-fill"></div>
                <div className="app-main-section" id="event-details-main">
                    <div id="event-details-header">
                        <h1 className="app-page-header">Rock Climbing</h1>
                        <MDBBtn id="leave-event-btn">LEAVE EVENT</MDBBtn>
                    </div>     
                    <MDBCardBody className="page-body" id="event-details-body">
                        <MDBRow>
                            <MDBCol size="7">
                                <p id="event-details-description">
                                Sed ut perspiciatiste velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"Sed ut perspiciatiste velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"Sed ut perspiciatiste velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                </p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol size="2">
                                <h3>Host:</h3>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                            </MDBCol>

                            <MDBCol size="5">
                                <h3>Attendees: 7/8</h3>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                                <img src="/default-avatar.jpg" className="event-details-user-icons"></img>
                            </MDBCol>

                            <MDBCol size="2"></MDBCol>
                            
                            <MDBCol size="3">
                                <h3 id="event-details-date">7:30 - 9:30pm</h3>
                                <h4 id="event-details-address">100 Waterloo way, Denver Colorado</h4>
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

                        <Post user="EventHelper" date="8:00pm Jan 21"
                              message="Hey Guys! Like for Attendance!"
                              threadType="message"
                        />

                        <Post user="Darren Cheung" date="8:00pm Jan 21"
                              message="Greyhound divisively hello coldly wonderfully marginally far..."
                              threadType="message"
                        />

                        <Post user="Darren Cheung" date="8:00pm Jan 21"
                              message="Greyhound divisively hello coldly wonderfully marginally far..."
                              threadType="message"
                        />

                        <Post user="Darren Cheung" date="8:00pm Jan 21"
                              message="Greyhound divisively hello coldly wonderfully marginally far..."
                              threadType="message"
                        />

                        <Post action="Lulu L. has joined the event" threadType="action" />

                        <Post action="Mickey D. has joined the event" threadType="action"/>

                        {postCards}
                    </MDBCardBody>
                </div>
            </div>
        );
    }
}

export default EventDetailsPage