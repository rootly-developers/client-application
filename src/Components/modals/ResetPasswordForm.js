import React, { Component } from 'react';
import axios from "axios";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ResetPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            email: "",
            token: "",
            currentPass: "",
            newPass: "",
            confirmNewPass: "",
            checkMessage: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, id) {
        var stateCopy = Object.assign({}, this.state);
        stateCopy[id] = event.target.value;
        this.setState(stateCopy);
    }

    handleSubmit() {
        const {email, token, currentPass, newPass, confirmNewPass} = this.state;
        if (!currentPass|| !newPass|| !confirmNewPass) {
            this.setState({checkMessage: "Fill out the fields"});
        } else if (newPass == confirmNewPass) {
            axios.put(`http://localhost:8080/password/reset`, {
                email : email,
                token : token,
                password : currentPass,
                newPassword : newPass,
            }).then(res => {
                if(res.status === 200) {
                    this.setState({checkMessage: "Your password has been changed."});
                }
                if(res.status === 400) {
                    this.setState({checkMessage: "Password is incorrect"});
                }
            }).catch(err => { 
                this.setState({checkMessage: err.response.data.cause});
            })
        } else {
            this.setState({checkMessage: "Your passwords don't match"});
        }
    }


    toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
    }

    render() {
        return (
            <MDBContainer className="editProfile">
                <MDBBtn color="primary" onClick={this.toggle}>Reset Password</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
                <MDBModalHeader toggle={this.toggle}>Reset Password</MDBModalHeader>
                <MDBModalBody>
                    <form>
                        <label htmlFor="" className="grey-text">
                        Current Password
                        </label>
                        <input type="password" name="currentPass" className="form-control" placeholder="Current Password" onChange={(e) => {this.handleChange(e,"currentPass")}} />
                        <br />
                        <label htmlFor="" className="grey-text">
                        New Password
                        </label>
                        <input type="password" name="newPass" className="form-control" placeholder="New Password" onChange={(e) => {this.handleChange(e,"newPass")}} />
                        <br />
                        <label htmlFor="" className="grey-text">
                        Rewrite New Password
                        </label>
                        <input type="password" name="confirmNewPass" className="form-control" placeholder="Confirm New Password" onChange={(e) => {this.handleChange(e,"confirmNewPass")}} />
                        <br />
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                    <label htmlFor="" className="grey-text">
                        {this.state.checkMessage}
                    </label>
                    <MDBBtn color="primary" onClick={this.handleSubmit}>Save changes</MDBBtn>
                </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
            );
    }
}

export default ResetPasswordForm;