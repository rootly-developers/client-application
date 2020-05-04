import React from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import "./styles/ChangeRegionDropDown.css"

const ChangeRegionDropDown = (props) => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
          Change Region
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={props.onclick}>Boston</MDBDropdownItem>
          <MDBDropdownItem onClick={props.onclick}>Toronto</MDBDropdownItem>
          <MDBDropdownItem onClick={props.onclick}>San Francisco</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default ChangeRegionDropDown