import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ProfileForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: this.props.userInfo,
            modal: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, id) {
        var stateCopy = Object.assign({}, this.state);
        stateCopy.content[id] = event.target.value;
        this.setState(stateCopy);
    }

    toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
    }

    render() {
        return (
            <MDBContainer className="editProfile">
                <MDBBtn color="primary" onClick={this.toggle}>Change Profile</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
                <MDBModalHeader toggle={this.toggle}>Change Profile Description</MDBModalHeader>
                <MDBModalBody>
                    <form>
                        <label htmlFor="" className="grey-text">
                        First Name
                        </label>
                        <input type="text" onChange={(e) => {this.handleChange(e,"firstName")}} className="form-control" defaultValue={this.state.content.firstName}/>
                        <br />
                        <label htmlFor="" className="grey-text">
                        Last Name
                        </label>
                        <input type="text" onChange={(e) => {this.handleChange(e,"lastName")}} className="form-control" defaultValue={this.state.content.lastName}/>
                        <br />
                        <label htmlFor="" className="grey-text">
                        Social Media
                        </label>
                        <input type="text" onChange={(e) => {this.handleChange(e,"socialLink")}} className="form-control" defaultValue={this.state.content.socialLink}/>
                        <br />
                        <label htmlFor="" className="grey-text">
                        Program
                        </label>
                        <input type="text" onChange={(e) => {this.handleChange(e,"programName")}} className="form-control" defaultValue={this.state.content.programName}/>
                        <label htmlFor="" className="grey-text">
                        Term
                        </label>
                        <input type="email" onChange={(e) => {this.handleChange(e,"term")}} className="form-control" defaultValue={this.state.content.term}/>
                        <br />
                        <label htmlFor="" className="grey-text">
                        Bio
                        </label>
                        <input type="text" onChange={(e) => {this.handleChange(e,"biography")}} className="form-control" defaultValue={this.state.content.biography}/>
                        <br />
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="primary" onClick={() => this.props.formCallback(this.state.content)}>Save changes</MDBBtn>
                </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
            );
    }
}

export default ProfileForm;