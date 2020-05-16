import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCard } from 'mdbreact';
import '../styles/ChangeRegionModal.css'
const locations = require('../../commons/locations.json');

class ChangeRegionModal extends Component {
  constructor(){
    super();
    this.state = {
      modal: false,
      id: locations.SEA.canonical
    };
    this.change = this.change.bind(this);
    this.toggle = this.toggle.bind(this);
    this.isActive = this.isActive.bind(this);
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

  isActive = id => {
    return id === this.state.id;
  }

  // TODO: Ideally we should pass both pretty and canon as a prop
  convertCanonToPretty(canonText) {
    for (var key in locations) {
        if (locations[key].canonical === canonText) {
            return locations[key].pretty;
        }
    }
}

  render() {
    this.state.id = this.props.value;

    return (
      <MDBContainer id="ChangeRegion">
        
        <h1 onClick={this.toggle}>{this.convertCanonToPretty(this.props.value)}</h1>
        
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>
            <h2>Choose Region</h2>
          </MDBModalHeader>
          <MDBModalBody>
            <div className="country">
              <h3>United States</h3>
              <h4 className="region">Western USA</h4>
              <MDBRow>
                <MDBBtn id={locations.SEA.canonical} onClick={this.change(locations.SEA.canonical)} active={this.isActive(locations.SEA.canonical)}><p>Western USA</p><h4>{locations.SEA.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.SF.canonical} onClick={this.change(locations.SF.canonical)} active={this.isActive(locations.SF.canonical)}><p>Western USA</p><h4>{locations.SF.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.LA.canonical} onClick={this.change(locations.LA.canonical)} active={this.isActive(locations.LA.canonical)}><p>Western USA</p><h4>{locations.LA.pretty}</h4></MDBBtn>
              </MDBRow>
              <MDBRow>
                <MDBBtn id={locations.SV.canonical} onClick={this.change(locations.SV.canonical)} active={this.isActive(locations.SV.canonical)}><p>Western USA</p><h4>{locations.SV.pretty}</h4></MDBBtn>
              </MDBRow>
              <h4 className="region">Eastern USA</h4>
              <MDBRow>
                <MDBBtn id={locations.CHI.canonical} onClick={this.change(locations.CHI.canonical)} active={this.isActive(locations.CHI.canonical)}><p>Eastern USA</p><h4>{locations.CHI.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.BOS.canonical} onClick={this.change(locations.BOS.canonical)} active={this.isActive(locations.BOS.canonical)}><p>Eastern USA</p><h4>{locations.BOS.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.NY.canonical} onClick={this.change(locations.NY.canonical)} active={this.isActive(locations.NY.canonical)}><p>Eastern USA</p><h4>{locations.NY.pretty}</h4></MDBBtn>
              </MDBRow>
              <MDBRow>
                <MDBBtn id={locations.ATX.canonical} onClick={this.change(locations.ATX.canonical)} active={this.isActive(locations.ATX.canonical)}><p>Eastern USA</p><h4>{locations.ATX.pretty}</h4></MDBBtn>
              </MDBRow>
            </div>
            <div className="country">
              <h3>Canada</h3>
              <h4 className="region">Western Canada</h4>
              <MDBRow>
                <MDBBtn id={locations.VAN.canonical} onClick={this.change(locations.VAN.canonical)} active={this.isActive(locations.VAN.canonical)}><p>Western Canada</p><h4>{locations.VAN.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.CAL.canonical} onClick={this.change(locations.CAL.canonical)} active={this.isActive(locations.CAL.canonical)}><p>Western Canada</p><h4>{locations.CAL.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.EDM.canonical} onClick={this.change(locations.EDM.canonical)} active={this.isActive(locations.EDM.canonical)}><p>Western Canada</p><h4>{locations.EDM.pretty}</h4></MDBBtn>
              </MDBRow>
              <h4 className="region">Eastern Canada</h4>
              <MDBRow>
                <MDBBtn id={locations.KW.canonical} onClick={this.change(locations.KW.canonical)} active={this.isActive(locations.KW.canonical)}><p>Eastern Canada</p><h4>{locations.KW.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.TO.canonical} onClick={this.change(locations.TO.canonical)} active={this.isActive(locations.TO.canonical)}><p>Eastern Canada</p><h4>{locations.TO.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.PR.canonical} onClick={this.change(locations.PR.canonical)} active={this.isActive(locations.PR.canonical)}><p>Eastern Canada</p><h4>{locations.PR.pretty}</h4></MDBBtn>
              </MDBRow>
              <MDBRow>
                <MDBBtn id={locations.YR.canonical} onClick={this.change(locations.YR.canonical)} active={this.isActive(locations.YR.canonical)}><p>Eastern Canada</p><h4>{locations.YR.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.OTT.canonical} onClick={this.change(locations.OTT.canonical)} active={this.isActive(locations.OTT.canonical)}><p>Eastern Canada</p><h4>{locations.OTT.pretty}</h4></MDBBtn>
                <MDBBtn id={locations.MTL.canonical} onClick={this.change(locations.MTL.canonical)} active={this.isActive(locations.MTL.canonical)}><p>Eastern Canada</p><h4>{locations.MTL.pretty}</h4></MDBBtn>
              </MDBRow>
              <MDBRow>
                <MDBBtn id={locations.QC.canonical} onClick={this.change(locations.QC.canonical)} active={this.isActive(locations.QC.canonical)}><p>Eastern Canada</p><h4>{locations.QC.pretty}</h4></MDBBtn>
              </MDBRow>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
      );
    }
}

export default ChangeRegionModal