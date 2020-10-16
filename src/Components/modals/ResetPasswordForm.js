import React, { useState, useContext } from 'react';
import axios from "axios";
import { UserContext } from '../../contexts/UserContext';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default function ResetPasswordForm() {
    const { user, token} = useContext(UserContext).userData;
    const [currentPass, setCurrentPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState("");
    const [message, setMessage] = useState("");
    const [modal, setModal] = useState(false);

    function handleSubmit() {
        if (!currentPass|| !newPass|| !confirmNewPass) {
            setMessage("Fill out the fields")
        } else if (newPass === confirmNewPass) {
            axios.put(`http://localhost:8080/password/reset`, {
                email : user.email,
                token : token,
                password : currentPass,
                newPassword : newPass,
            }).then(res => {
                if(res.status === 200) {
                    setMessage("Your password has been changed.")
                }
                if(res.status === 400) {
                    setMessage("Password is incorrect")
                }
            }).catch(err => { 
                setMessage(err.response.data.cause)
            })
        } else {
            setMessage("Your passwords don't match")
        }
    }

    return (
        <MDBContainer className="editProfile">
            <MDBBtn color="primary" onClick={()=>setModal(!modal)}>Reset Password</MDBBtn>
            <MDBModal isOpen={modal} toggle={()=>setModal(!modal)} centered>
            <MDBModalHeader toggle={()=>setModal(!modal)}>Reset Password</MDBModalHeader>
            <MDBModalBody>
                <form>
                    <label htmlFor="" className="grey-text">
                    Current Password
                    </label>
                    <input type="password" name="currentPass" className="form-control" placeholder="Current Password" onChange={(e) => {setCurrentPass(e.target.value)}} />
                    <br />
                    <label htmlFor="" className="grey-text">
                    New Password
                    </label>
                    <input type="password" name="newPass" className="form-control" placeholder="New Password" onChange={(e) => {setNewPass(e.target.value)}} />
                    <br />
                    <label htmlFor="" className="grey-text">
                    Rewrite New Password
                    </label>
                    <input type="password" name="confirmNewPass" className="form-control" placeholder="Confirm New Password" onChange={(e) => {setConfirmNewPass(e.target.value)}} />
                    <br />
                </form>
            </MDBModalBody>
            <MDBModalFooter>
                <label htmlFor="" className="grey-text">
                    {message}
                </label>
                <MDBBtn color="primary" onClick={handleSubmit}>Save changes</MDBBtn>
            </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
        );
}