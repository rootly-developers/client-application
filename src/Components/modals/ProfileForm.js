import React, { useState} from 'react';
import PropTypes from 'prop-types'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const ProfileForm = ({checkMessage, userInfo, formCallback}) => {

    const [newuser, setNewUser] = useState(userInfo? userInfo: {});
    const [modal, setModal] = useState(false);

    const handleChange = (event, id) => {
        var stateCopy = Object.assign({}, newuser);
        stateCopy[id] = event.target.value;
        setNewUser(stateCopy);
    }

    const toggle = () => {
        setModal(!modal)
    }

    return (
        <MDBContainer className="editProfile">
            <MDBBtn color="primary" onClick={toggle}>Change Profile</MDBBtn>
            <MDBModal isOpen={modal} toggle={toggle} centered>
            <MDBModalHeader toggle={toggle}>Change Profile Description</MDBModalHeader>
            <MDBModalBody>
                <form>
                    <label htmlFor="" className="grey-text">
                    First Name
                    </label>
                    <input type="text" onChange={(e) => {handleChange(e,"firstName")}} className="form-control" defaultValue={newuser.firstName}/>
                    <br />
                    <label htmlFor="" className="grey-text">
                    Last Name
                    </label>
                    <input type="text" onChange={(e) => {handleChange(e,"lastName")}} className="form-control" defaultValue={newuser.lastName}/>
                    <br />
                    <label htmlFor="" className="grey-text">
                    Social Media
                    </label>
                    <input type="text" onChange={(e) => {handleChange(e,"socialLink")}} className="form-control" defaultValue={newuser.socialLink}/>
                    <br />
                    <label htmlFor="" className="grey-text">
                    Program
                    </label>
                    <input type="text" onChange={(e) => {handleChange(e,"programName")}} className="form-control" defaultValue={newuser.programName}/>
                    <label htmlFor="" className="grey-text">
                    Term
                    </label>
                    <input type="email" onChange={(e) => {handleChange(e,"term")}} className="form-control" defaultValue={newuser.term}/>
                    <br />
                    <label htmlFor="" className="grey-text">
                    Bio
                    </label>
                    <input type="text" onChange={(e) => {handleChange(e,"bio")}} className="form-control" defaultValue={newuser.bio}/>
                    <br />
                </form>
            </MDBModalBody>
            <MDBModalFooter>
                <label htmlFor="" className="grey-text">
                    {checkMessage}
                </label>
                <MDBBtn color="primary" onClick={() => formCallback(newuser)}>Save changes</MDBBtn>
            </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
        );
}

ProfileForm.propTypes = {
    checkMessage: PropTypes.string.isRequired,
    userInfo: PropTypes.object.isRequired,
    formCallback: PropTypes.func.isRequired,
}

export default ProfileForm