import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './styles/Comment.css'


const Comment = (props) => {
    return (
        <MDBRow className="comment-post">
            <MDBCol size="1" className="comment-margin"></MDBCol>

            <MDBCol size="1">
                <img src="/default-avatar.jpg" className="comment-img" alt='avatar'></img>
            </MDBCol>

            <MDBCol size="10" className="comment-main">
                <MDBRow>
                    <MDBCol size="12">
                        <h5 className="comment-user">{props.username}</h5>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="12">
                        <p className="comment-content">{props.content}</p>  
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    );
  }
  
  export default Comment