import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './styles/MessagePost.css'


class MessagePost extends Component {
    constructor(){
        super();
        this.state = {
            thumbCount: 0
        }
        this.handleThumbsUpClick = this.handleThumbsUpClick.bind(this);
    }

    handleThumbsUpClick() {
        this.setState({thumbCount: this.state.thumbCount + 1})
    }

    render() {
        const userIcon = this.props.user == "EventHelper" ? "hand-paper": "star";
        let iconClass = this.props.user == "EventHelper" ? "deep-purple-text user-icon": "amber-text user-icon";
        return(
            <MDBRow className="message-post">
                <MDBCol size="1">
                    <img src="default-avatar.jpg" className="message-post-img"></img>
                </MDBCol>

                <MDBCol size="7" className="message-post-main-section">
                    <MDBRow>
                        <MDBCol size="12" className="message-post-top-row">
                            <h5 className="message-post-user">{this.props.user}</h5>
                            <MDBIcon far icon={userIcon} size="lg" className={iconClass} />
                            <p className="message-post-date">{this.props.date}</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="12">
                            <p className="message-post-message">{this.props.message}</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

                <MDBCol size="4" className="message-post-right-bar">
                    <img src="default-avatar.jpg" className="message-icon"></img>
                    <img src="default-avatar.jpg" className="message-icon"></img>
                    <img src="default-avatar.jpg" className="message-icon"></img>
                    <p className="thumb-count">{this.state.thumbCount}</p>
                    <MDBIcon far icon="thumbs-up" size="lg" className="deep-purple-text thumb-icon" onClick={this.handleThumbsUpClick}/>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default MessagePost