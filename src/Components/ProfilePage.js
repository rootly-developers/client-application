import React, { Component } from 'react';
import Images from "../images.js"
import axios from "axios";
import {MDBRow, MDBBtn} from "mdbreact";
import './styles/ProfilePage.css'
import ProfileForm from './modals/ProfileForm.js'

class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : this.props.userInfo,
            token : this.props.userToken
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
    }

    handleProfileUpdate = (content)  => {
        this.setState({user : content});
        const {firstName, lastName, programName, location, term, socialLink, avatar} = this.state.user;
        axios.put(`http://localhost:8080/users`, {
             firstName : firstName,
             lastName : lastName,
             programName : programName,
             location : location,
             term : term,
             socialLink : socialLink,
             avatar : avatar,
             token: this.state.token
            })
          .then(res => {
              console.log(res.status);
              if(res.status == 200) {
                console.log("Update Successful");
              }
          })
    }

    handleLogout(){
        return new Promise((resolve, reject) => {
            axios.post(`http://localhost:8080/logout`, {
                    token: this.state.token
                })
            .then(res => {
                if(res.status == 200) {
                    console.log("Logout Successful");
                    resolve({ redirectPath: "/", params: {}});
                }
            })
        })
    }

    render() {

        return(
            <div className="app-page" id="profile-page">
                <div className="app-page-fill"></div>
                    <MDBRow>
                        <img className="avatar" src ={this.state.user.avatar? Images.avatar[this.state.user.avatar.toLowerCase()] : Images.avatar.goose}></img>
                    </MDBRow>
                <div className="app-main-section">
                    <div className="page-body">
                        <MDBRow>
                                <div className="description">
                                    <h2><b>{this.state.user.firstName} {this.state.user.lastName}.</b></h2>
                                    <h4>{this.state.user.programName} - {this.state.user.term}</h4>
                                    <h4>{this.state.user.socialLink}</h4>
                                    <p>{this.state.user.biography}</p>
                                </div>
                        </MDBRow>
                        <MDBRow>
                            <div className="utilities">
                                <ProfileForm className="btn editProfile" userInfo={this.state.user} formCallback={this.handleProfileUpdate}></ProfileForm>
                                <MDBBtn onClick={this.handleProfileUpdate} type="" className="btn changePassword">Change Password</MDBBtn>
                                <MDBBtn onClick={this.handleLogout} type="" className="btn logout">logout</MDBBtn>
                            </div>
                        </MDBRow>
                    </div>
                    </div>
            </div>
        );
    }
}

export default ProfilePage