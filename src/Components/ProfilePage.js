import React, { useState, useEffect } from 'react';
import Images from "../images.js"
import axios from "axios";
import {MDBRow, MDBBtn} from "mdbreact";
import './styles/ProfilePage.css'
import ProfileForm from './modals/ProfileForm.js'
import ResetPasswordForm from './modals/ResetPasswordForm.js'

export default function ProfilePage() {

    const [message, setMessage] = useState("");
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");

    // TODO: Add token to get user from header.
    const getUser = ()  => {
        return new Promise((resolve, reject) => { axios({
        method: 'get',
        url: "http://localhost:8080/users",
        headers: {
            'uid': '',
            'token': ""},
        })
        .then(res => {
            let userData = {};
            const reqData = JSON.parse(res.request.response).data[0]
            console.log(res.request.response)
            if(res.status == 200) {
            userData.firstName = reqData.first_name
            userData.lastName = reqData.last_name
            userData.programName = reqData.program_name
            userData.location = reqData.location
            userData.term = reqData.term
            userData.socialLink = reqData.social_link
            userData.avatar = reqData.avatar
            setUser(userData)
            }
        })
        })
    }

    useEffect(() => {
        getUser()
    }, []);

    const handleProfileUpdate = (content)  => {
        const {firstName, lastName, programName, location, term, socialLink, avatar} = content;
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
              if(res.status == 200) {
                  setUser(content)
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
                    resolve({ redirectPath: "/", params: {}});
                }
            })
        })
    }

    return(
            <div className="app-page" id="profile-page">
                <div className="app-page-fill"></div>
                    <MDBRow>
                        <img className="avatar" alt="" src ={user.avatar? Images.avatar[user.avatar.toLowerCase()] : Images.avatar.goose}></img>
                    </MDBRow>
                <div className="app-main-section">
                    <div className="page-body">
                        <MDBRow>
                                <div className="description">
                                    <h2><b>{user.firstName} {user.lastName ? user.lastName[0]:user.lastName}.</b></h2>
                                    <h4>{user.programName} - {user.term}</h4>
                                    <h4>{user.socialLink}</h4>
                                    <p>{user.bio}</p>
                                </div>
                        </MDBRow>
                        <MDBRow>
                            <div className="utilities">
                                <ProfileForm checkMessage={message} className="btn editProfile" userInfo={user} formCallback={handleProfileUpdate}></ProfileForm>
                                <ResetPasswordForm type="" className="btn changePassword">Change Password</ResetPasswordForm>
                                <MDBBtn onClick={handleLogout} type="" className="btn logout">logout</MDBBtn>
                            </div>
                        </MDBRow>
                    </div>
                    </div>
            </div>
        );
}