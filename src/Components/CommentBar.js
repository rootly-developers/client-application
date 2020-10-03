import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './styles/CommentBar.css';
import axios from "axios";


class CommentBar extends Component {
    constructor(){
        super();
        this.state = {
            commentInput: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleSendComment(this.props.threadId, this.state.commentInput);
        this.setState({commentInput: ""});
    }

    render() {
        return(
            <MDBRow>
                <MDBCol size="2"></MDBCol>
                <MDBCol size="8">
                    <MDBInput
                        label="Some text..."
                        value={this.state.commentInput}
                        onChange={(e) => this.setState({commentInput: e.target.value})}
                    />
                </MDBCol>
                <MDBCol size="2" className="comment-btn-col">
                    <MDBBtn className="comment-btn" onClick={this.handleClick}>SEND</MDBBtn>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default CommentBar