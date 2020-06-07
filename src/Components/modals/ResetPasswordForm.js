import React, { Component } from 'react';
import axios from "axios";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ResetPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            email: "mickey1003@uwaterloo.ca",
            token: "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc0Mzg3ZGUyMDUxMWNkNDgzYTIwZDIyOGQ5OTI4ZTU0YjNlZTBlMDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcm9vdGx5LTExMjM1ODEzIiwiYXVkIjoicm9vdGx5LTExMjM1ODEzIiwiYXV0aF90aW1lIjoxNTkxNTcxODM3LCJ1c2VyX2lkIjoiOVgxTjNqUkYzTWRJMnRIOE9ZTzJOYWsyYUloMSIsInN1YiI6IjlYMU4zalJGM01kSTJ0SDhPWU8yTmFrMmFJaDEiLCJpYXQiOjE1OTE1NzE4MzcsImV4cCI6MTU5MTU3NTQzNywiZW1haWwiOiJtaWNrZXkxMDAzQHV3YXRlcmxvby5jYSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtaWNrZXkxMDAzQHV3YXRlcmxvby5jYSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iNxqX-cu3NcU3O00GvaeQgL7OqUxcjLrxnjOqfYCao9ZcmS4j8ejGYkhvEExebkgljV5aOInXY5jO3pzM872RjDqvqG_LReN9Mmq7yvwIBgkuSZkv2Oe3IvC78_E0Uyz5J7zPdHWEKSvkgx474M0pgv0RGkGyHj9yx_zDxBfsiAySoPkA-kn3cdq89H2xnLPSD0M_g6Q8hKKTXZTI6famSVWZF88hp7Swm2kOr2oZaTwrw9dBfKv3KlL6GcfnPK0wL2LhT4lAraptp2f9VXKZrylG0UhDlV5wtIUAZJVpxckHbkoJNvIqsr3WqWw5nwUQx5KKlCfkwkp4xhiXZKd6A",
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
        if (currentPass == undefined || newPass == undefined  || confirmNewPass == undefined ) {
            this.setState({checkMessage: "Fill out the fields"});
        } else if (newPass == confirmNewPass) {
            axios.put(`http://localhost:8080/password/reset`, {
                email : email,
                token : token,
                password : currentPass,
                newPassword : newPass,
            })
            .then(res => {
                console.log(res);
                if(!res.status == 200) {
                    this.setState({checkMessage: "Not good"});
                }
                else {
                    this.setState({checkMessage: "Your password has been changed."});
                }
            });
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