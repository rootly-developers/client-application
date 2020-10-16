import React, { useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import Images from "../images.js"
import axios from "axios";
import {MDBRow, MDBBtn} from "mdbreact";
import './styles/ProfilePage.css'
import ProfileForm from './modals/ProfileForm.js'
import { UserContext } from '../contexts/UserContext';
import ResetPasswordForm from './modals/ResetPasswordForm.js'

export default function ProfilePage() {
    const { user, token} = useContext(UserContext).userData;
    const { setUserData } = useContext(UserContext);
    const [message, setMessage] = useState("");
    const [profileUser, setProfileUser] = useState({...user});

    let history = useHistory();

    const handleProfileUpdate = (content)  => {
        const {firstName, lastName, programName, location, term, socialLink, avatar} = content;
        setProfileUser(content)
        setUserData({...content})
        axios.put(`http://localhost:8080/users`, {
             firstName : firstName,
             lastName : lastName,
             programName : programName,
             location : location,
             term : term,
             socialLink : socialLink,
             avatar : avatar,
             token: token
            })
          .then(res => {
              if(res.status === 200) {
                  setMessage('Update success')
              }
          }).catch(err => { 
            setMessage(err.message)
        })
    }

    const handleLogout = () => {
        return new Promise((resolve, reject) => {
            axios.post(`http://localhost:8080/logout`, {
                    token: token
                })
            .then(res => {
                if(res.status === 200) {
                    history.push('/')
                }
            })
        })
    }

    return(
            <div className="app-page" id="profile-page">
                <div className="app-page-fill"></div>
                    <MDBRow>
                        <img className="avatar" alt="" src ={profileUser && profileUser.avatar? Images.avatar[profileUser.avatar.toLowerCase()] : Images.avatar.goose}></img>
                    </MDBRow>
                <div className="app-main-section">
                    <div className="page-body">
                        <MDBRow>
                                <div className="description">
                                    <h2><b>{profileUser.firstName} {profileUser.lastName ? profileUser.lastName[0]:""}.</b></h2>
                                    <h4>{profileUser.programName} - {profileUser.term}</h4>
                                    <h4>{profileUser.socialLink}</h4>
                                    <p>{profileUser.bio}</p>
                                </div>
                        </MDBRow>
                        <MDBRow>
                            <div className="utilities">
                                <ProfileForm checkMessage={message} className="btn editProfile" userInfo={profileUser} formCallback={handleProfileUpdate}></ProfileForm>
                                <ResetPasswordForm type="" className="btn changePassword">Change Password</ResetPasswordForm>
                                <MDBBtn onClick={handleLogout} type="" className="btn logout">logout</MDBBtn>
                            </div>
                        </MDBRow>
                    </div>
                    </div>
            </div>
        );
}