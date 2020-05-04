import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './styles/ChangeRegionModal.css'

class ChangeRegionModal extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer id="ChangeRegion">
      <h1 onClick={this.toggle}>{this.props.value}</h1>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Choose Region</MDBModalHeader>
        <MDBModalBody>
          <MDBBtn onClick={this.props.onclick}>Toronto</MDBBtn>
          <MDBBtn onClick={this.props.onclick}>San Francisco</MDBBtn>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn onClick={this.toggle}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ChangeRegionModal