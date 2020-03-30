import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCardBody } from "mdbreact";
import './styles/ProfilePage.css'

class ProfilePage extends Component {
    constructor(){
        super();
        this.name = "Lulu Liu";
        this.biography = "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ";
        this.program = "SYDE - 3A";
        this.socialMedia = "@LuluLiu";
        this.avatar = "https://workmacro.com/wp-content/uploads/2018/02/1-by-1-1024x1024.png";
    }
    render() {
        return(
            <div className="app-page" id="profile-page">
                <div className="app-page-fill"></div>
                    <MDBRow>
                        <img className="avatar" src ={this.avatar}></img>
                    </MDBRow>
                <div className="app-main-section">
                    <div className="page-body">
                        <MDBRow>
                                <div className="description">
                                    <h2><b>{this.name}</b></h2>
                                    <h4>{this.socialMedia}</h4>
                                    <h4>{this.program}</h4>
                                    <p>{this.biography}</p>
                                </div>
                        </MDBRow>
                        <MDBRow>
                            <div className="utilities">
                                <MDBBtn type="" className="btn editProfile">Edit Profile</MDBBtn>
                                <MDBBtn type="" className="btn changePassword">Change Password</MDBBtn>
                            </div>
                        </MDBRow>
                    </div>
                    </div>
            </div>
        );
    }
}

export default ProfilePage