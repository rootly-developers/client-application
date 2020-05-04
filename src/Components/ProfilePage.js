import React, { Component } from 'react';
import Images from "../images.js"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCardBody } from "mdbreact";
import './styles/ProfilePage.css'

class ProfilePage extends Component {
    constructor(){
        super();
        this.state = {
            name: "Lulu L.",
            biography: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ",
            program: "SYDE - 3A",
            socialMedia: "@LuluLiu",
            avatar: Images.avatar.chicken
            }
    }
    render() {
        return(
            <div className="app-page" id="profile-page">
                <div className="app-page-fill"></div>
                    <MDBRow>
                        <img className="avatar" src ={this.state.avatar}></img>
                    </MDBRow>
                <div className="app-main-section">
                    <div className="page-body">
                        <MDBRow>
                                <div className="description">
                                    <h2><b>{this.state.name}</b></h2>
                                    <h4>{this.state.program}</h4>
                                    <h4>{this.state.socialMedia}</h4>
                                    <p>{this.state.biography}</p>
                                </div>
                        </MDBRow>
                        <MDBRow>
                            <div className="utilities">
                                <MDBBtn type="" className="btn editProfile">Edit Profile</MDBBtn>
                                <MDBBtn type="" className="btn changePassword">Change Password</MDBBtn>
                                <MDBBtn type="" className="btn logout">logout</MDBBtn>
                            </div>
                        </MDBRow>
                    </div>
                    </div>
            </div>
        );
    }
}

export default ProfilePage