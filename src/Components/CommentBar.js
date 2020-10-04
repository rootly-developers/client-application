import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './styles/CommentBar.css';

export default function CommentBar(props) {
    const [commentInput, setCommentInput] = useState("");

    function handleClick() {
        props.handleSendComment(props.threadId, commentInput);
        setCommentInput("");
    }

    return(
        <MDBRow>
            <MDBCol size="2"></MDBCol>
            <MDBCol size="8">
                <MDBInput
                    label="Some text..."
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                />
            </MDBCol>
            <MDBCol size="2" className="comment-btn-col">
                <MDBBtn className="comment-btn" onClick={handleClick}>SEND</MDBBtn>
            </MDBCol>
        </MDBRow>
    );
}