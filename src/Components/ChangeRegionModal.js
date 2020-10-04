import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBRow,} from 'mdbreact';
import './styles/ChangeRegionModal.css'
const locations = require('../commons/locations.json');

export default function ChangeRegionModal(props) {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(locations.SEA.canonical);

  useEffect(() => {
    setId(props.value);
  }, [props]);

  const toggle = () => {
    setModal(!modal)
  }

  const change = (newId) => e => {
    if (newId !== id){
      setId(newId);
    }
    toggle();
    props.onclick(e);
  }

  const isActive = newId => {
    return newId === id;
  }

  // TODO: Ideally we should pass both pretty and canon as a prop
  function convertCanonToPretty(canonText) {
    for (var key in locations) {
        if (locations[key].canonical === canonText) {
            return locations[key].pretty;
        }
    }
  }

  return (
    <MDBContainer id="ChangeRegion">
      
      <h1 onClick={toggle}>{convertCanonToPretty(props.value)}</h1>
      
      <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>
          <h2>Choose Region</h2>
        </MDBModalHeader>
        <MDBModalBody>
          <div className="country">
            <h3>United States</h3>
            <h4 className="region">Western USA</h4>
            <MDBRow>
              <MDBBtn id={locations.SEA.canonical} onClick={change(locations.SEA.canonical)} active={isActive(locations.SEA.canonical)}><p>Western USA</p><h4>{locations.SEA.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.SF.canonical} onClick={change(locations.SF.canonical)} active={isActive(locations.SF.canonical)}><p>Western USA</p><h4>{locations.SF.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.LA.canonical} onClick={change(locations.LA.canonical)} active={isActive(locations.LA.canonical)}><p>Western USA</p><h4>{locations.LA.pretty}</h4></MDBBtn>
            </MDBRow>
            <MDBRow>
              <MDBBtn id={locations.SV.canonical} onClick={change(locations.SV.canonical)} active={isActive(locations.SV.canonical)}><p>Western USA</p><h4>{locations.SV.pretty}</h4></MDBBtn>
            </MDBRow>
            <h4 className="region">Eastern USA</h4>
            <MDBRow>
              <MDBBtn id={locations.CHI.canonical} onClick={change(locations.CHI.canonical)} active={isActive(locations.CHI.canonical)}><p>Eastern USA</p><h4>{locations.CHI.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.BOS.canonical} onClick={change(locations.BOS.canonical)} active={isActive(locations.BOS.canonical)}><p>Eastern USA</p><h4>{locations.BOS.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.NY.canonical} onClick={change(locations.NY.canonical)} active={isActive(locations.NY.canonical)}><p>Eastern USA</p><h4>{locations.NY.pretty}</h4></MDBBtn>
            </MDBRow>
            <MDBRow>
              <MDBBtn id={locations.ATX.canonical} onClick={change(locations.ATX.canonical)} active={isActive(locations.ATX.canonical)}><p>Eastern USA</p><h4>{locations.ATX.pretty}</h4></MDBBtn>
            </MDBRow>
          </div>
          <div className="country">
            <h3>Canada</h3>
            <h4 className="region">Western Canada</h4>
            <MDBRow>
              <MDBBtn id={locations.VAN.canonical} onClick={change(locations.VAN.canonical)} active={isActive(locations.VAN.canonical)}><p>Western Canada</p><h4>{locations.VAN.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.CAL.canonical} onClick={change(locations.CAL.canonical)} active={isActive(locations.CAL.canonical)}><p>Western Canada</p><h4>{locations.CAL.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.EDM.canonical} onClick={change(locations.EDM.canonical)} active={isActive(locations.EDM.canonical)}><p>Western Canada</p><h4>{locations.EDM.pretty}</h4></MDBBtn>
            </MDBRow>
            <h4 className="region">Eastern Canada</h4>
            <MDBRow>
              <MDBBtn id={locations.KW.canonical} onClick={change(locations.KW.canonical)} active={isActive(locations.KW.canonical)}><p>Eastern Canada</p><h4>{locations.KW.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.TO.canonical} onClick={change(locations.TO.canonical)} active={isActive(locations.TO.canonical)}><p>Eastern Canada</p><h4>{locations.TO.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.PR.canonical} onClick={change(locations.PR.canonical)} active={isActive(locations.PR.canonical)}><p>Eastern Canada</p><h4>{locations.PR.pretty}</h4></MDBBtn>
            </MDBRow>
            <MDBRow>
              <MDBBtn id={locations.YR.canonical} onClick={change(locations.YR.canonical)} active={isActive(locations.YR.canonical)}><p>Eastern Canada</p><h4>{locations.YR.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.OTT.canonical} onClick={change(locations.OTT.canonical)} active={isActive(locations.OTT.canonical)}><p>Eastern Canada</p><h4>{locations.OTT.pretty}</h4></MDBBtn>
              <MDBBtn id={locations.MTL.canonical} onClick={change(locations.MTL.canonical)} active={isActive(locations.MTL.canonical)}><p>Eastern Canada</p><h4>{locations.MTL.pretty}</h4></MDBBtn>
            </MDBRow>
            <MDBRow>
              <MDBBtn id={locations.QC.canonical} onClick={change(locations.QC.canonical)} active={isActive(locations.QC.canonical)}><p>Eastern Canada</p><h4>{locations.QC.pretty}</h4></MDBBtn>
            </MDBRow>
          </div>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
    );
}