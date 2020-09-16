import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
const Menu = () => {

    return (<>
        <Navbar  style={{background:"#009C41"}} variant="dark">
            <Navbar.Brand  as={Link} to="/" > Book  store</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link  as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/admin">Book Admin</Nav.Link>
             </Nav>

        </Navbar>
        <br />

    </>)
}


export default Menu