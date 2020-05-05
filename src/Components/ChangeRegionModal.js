import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCard } from 'mdbreact';
import './styles/ChangeRegionModal.css'
const locations = require('../commons/locations.json');
const location_id = ["non", "Seattle", "San Francisco / Bay", "Los Angeles", "Silicon Valley", "Chicago", "Boston", "New York", "Austin", "Vancouver", "Calgary", "Edmonton", "Winnipeg", "Kitchener-Waterloo", "Toronto", "Peel Region", "York Region", "Ottawa", "Montreal", "Quebec City"]

class ChangeRegionModal extends Component {
  constructor(){
    super();
    this.state = {
      modal: false,
      id: "1"
    };
    this.change = this.change.bind(this);
    this.toggle = this.toggle.bind(this);
    this.isActive = this.isActive.bind(this);
    this.getIdForLocation = this.getIdForLocation.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  change = (id) => e => {
    if (id != this.state.id){
        this.setState({
            id: id
          });
    }
    this.toggle();
    this.props.onclick(e);
  }

  isActive = id =>{
    if (id != this.state.id){
      return false;
    }
    return true;
  }

  getIdForLocation(value) {
    return location_id.indexOf(value);
  }

  render() {
    this.state.id = this.getIdForLocation(this.props.value);
    return (
      <MDBContainer id="ChangeRegion">
        <h1 onClick={this.toggle}>{this.props.value}</h1>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>
            <h2>Choose Region</h2>
          </MDBModalHeader>
          <MDBModalBody>
            <div className="country">
              <h3>United States</h3>
              <h4 className="region">Western USA</h4>
              <MDBRow>
                <MDBBtn id="1" onClick={this.change("1")} active={this.isActive("1")}><p>Western USA</p><h4>Seattle</h4></MDBBtn>
                <MDBBtn id="2" onClick={this.change("2")} active={this.isActive("2")}><p>Western USA</p><h4>San Francisco / Bay</h4></MDBBtn>
                <MDBBtn id="3" onClick={this.change("3")} active={this.isActive("3")}><p>Western USA</p><h4>Los Angeles</h4></MDBBtn>
              </MDBRow>
              <MDBRow>
                <MDBBtn id="4" onClick={this.change("4")} active={this.isActive("4")}><p>Western USA</p><h4>Silicon Valley</h4></MDBBtn>
              </MDBRow>
              <h4 className="region">Eastern USA</h4>
              <MDBRow>
                <MDBBtn id="5" onClick={this.change("5")} active={this.isActive("5")}><p>Eastern USA</p><h4>Chicago</h4></MDBBtn>
                <MDBBtn id="6" onClick={this.change("6")} active={this.isActive("6")}><p>Eastern USA</p><h4>Boston</h4></MDBBtn>
                <MDBBtn id="7" onClick={this.change("7")} active={this.isActive("7")}><p>Eastern USA</p><h4>New York</h4></MDBBtn>
              </MDBRow>
              <MDBRow>
                <MDBBtn id="8" onClick={this.change("8")} active={this.isActive("8")}><p>Eastern USA</p><h4>Austin</h4></MDBBtn>
              </MDBRow>
            </div>
            <div className="country">
              <h3>Canada</h3>
              <h4 className="region">Western Canada</h4>
              <MDBRow>
                <MDBBtn id="10" onClick={this.change("9")} active={this.isActive("9")}><p>Western Canada</p><h4>Vancouver</h4></MDBBtn>
                <MDBBtn id="11" onClick={this.change("10")} active={this.isActive("10")}><p>Western Canada</p><h4>Calgary</h4></MDBBtn>
                <MDBBtn id="12" onClick={this.change("11")} active={this.isActive("11")}><p>Western Canada</p><h4>Edmonton</h4></MDBBtn>
              </MDBRow>
              <MDBRow>
                <MDBBtn id="13" onClick={this.change("12")} active={this.isActive("12")}><p>Western Canada</p><h4>Winnipeg</h4></MDBBtn>
              </MDBRow>
              <h4 className="region">Eastern Canada</h4>
              <MDBRow>
                <MDBBtn id="14" onClick={this.change("13")} active={this.isActive("13")}><p>Eastern Canada</p><h4>Kitchener-Waterloo</h4></MDBBtn>
                <MDBBtn id="15" onClick={this.change("14")} active={this.isActive("14")}><p>Eastern Canada</p><h4>Toronto</h4></MDBBtn>
                <MDBBtn id="16" onClick={this.change("15")} active={this.isActive("15")}><p>Eastern Canada</p><h4>Peel Region</h4></MDBBtn>
              </MDBRow>
              <MDBRow>
                <MDBBtn id="17" onClick={this.change("16")} active={this.isActive("16")}><p>Eastern Canada</p><h4>York Region</h4></MDBBtn>
                <MDBBtn id="18" onClick={this.change("17")} active={this.isActive("17")}><p>Eastern Canada</p><h4>Ottawa</h4></MDBBtn>
                <MDBBtn id="19" onClick={this.change("18")} active={this.isActive("18")}><p>Eastern Canada</p><h4>Montreal</h4></MDBBtn>
              </MDBRow>
              <MDBRow>
                <MDBBtn id="20" onClick={this.change("19")} active={this.isActive("19")}><p>Eastern Canada</p><h4>Quebec City</h4></MDBBtn>
              </MDBRow>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
      );
    }
}

export default ChangeRegionModal