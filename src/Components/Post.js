import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './styles/Post.css'


class Post extends Component {
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
        return(
            <MDBRow className="post">
                <MDBCol size="1">
                    <img src="default-avatar.jpg" className="post-img"></img>
                </MDBCol>

                <MDBCol size="7" className="post-main-section">
                    <MDBRow>
                        <MDBCol size="6" className="post-top-row">
                            <h5 className="post-user">{this.props.user}</h5>
                            <MDBIcon far icon="hand-paper" size="lg" className="deep-purple-text hand-icon" />
                            <p className="post-date">{this.props.date}</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="12">
                            <p className="post-message">{this.props.message}</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

                <MDBCol size="4" className="post-right-bar">
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

export default Post