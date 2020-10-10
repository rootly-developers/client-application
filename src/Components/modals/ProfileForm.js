import React, { useState} from 'react';
import PropTypes from 'prop-types'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const ProfileForm = ({checkMessage:message, user:incomingUser, formCallback}) => {

    const [user, setUser] = useState(incomingUser);
    const [modal, setModal] = useState(false);

    const handleChange = (event, id) => {
        var stateCopy = Object.assign({}, user);
        stateCopy[id] = event.target.value;
        setUser(stateCopy);
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
                    <input type="text" onChange={(e) => {handleChange(e,"firstName")}} className="form-control" defaultValue={user.firstName}/>
                    <br />
                    <label htmlFor="" className="grey-text">
                    Last Name
                    </label>
                    <input type="text" onChange={(e) => {handleChange(e,"lastName")}} className="form-control" defaultValue={user.lastName}/>
                    <br />
                    <label htmlFor="" className="grey-text">
                    Social Media
                    </label>
                    <input type="text" onChange={(e) => {handleChange(e,"socialLink")}} className="form-control" defaultValue={user.socialLink}/>
                    <br />
                    <label htmlFor="" className="grey-text">
                    Program
                    </label>
                    <input type="text" onChange={(e) => {handleChange(e,"programName")}} className="form-control" defaultValue={user.programName}/>
                    <label htmlFor="" className="grey-text">
                    Term
                    </label>
                    <input type="email" onChange={(e) => {handleChange(e,"term")}} className="form-control" defaultValue={user.term}/>
                    <br />
                    <label htmlFor="" className="grey-text">
                    Bio
                    </label>
                    <input type="text" onChange={(e) => {handleChange(e,"bio")}} className="form-control" defaultValue={user.bio}/>
                    <br />
                </form>
            </MDBModalBody>
            <MDBModalFooter>
                <label htmlFor="" className="grey-text">
                    {message}
                </label>
                <MDBBtn color="primary" onClick={() => formCallback(user)}>Save changes</MDBBtn>
            </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
        );
}

ProfileForm.propTypes = {
    checkMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    formCallback: PropTypes.func.isRequired,
}

export default ProfileForm