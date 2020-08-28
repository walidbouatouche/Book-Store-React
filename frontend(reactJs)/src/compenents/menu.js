import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Menu = () => {

    return (<>
        <Navbar  style={{background:"#009C41"}} variant="dark">
            <Navbar.Brand href="#home"> Book  store</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

        </Navbar>
        <br />

    </>)
}


export default Menu