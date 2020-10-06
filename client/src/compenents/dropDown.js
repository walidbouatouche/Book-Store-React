import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import React  from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const DropDown_ = ({children ,title  }) => {

    


    return (
        <>
        <Dropdown >
  <Dropdown.Toggle  variant="success" id="dropdown-basic" style={{border:"2px slid green"}}>
    {title}
  </Dropdown.Toggle >

  <Dropdown.Menu >
       {children}
      

  </Dropdown.Menu>
</Dropdown>
        </>
    );
}


export default DropDown_