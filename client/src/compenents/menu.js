import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import Auth from '../helpers/auth'
import Button from 'react-bootstrap/Button'


const Menu = () => {

    const logout = () => {
        Auth.clearAll()
    }
    return (<>
        <Navbar style={{ background: "#009C41" }} variant="dark">
            <Navbar.Brand as={Link} to="/" > Book  store</Navbar.Brand>
            <Nav className="mr-auto">
                {!Auth.isAuth() && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                {Auth.isAuth() && Auth.getRole()=="admin" &&  <Nav.Link as={Link} to="/admin">Book Admin</Nav.Link>}
                {Auth.isAuth() &&  Auth.getRole()=="user" && <Nav.Link as={Link} to="/favori">Favoris</Nav.Link>}

            </Nav>
            {Auth.isAuth() &&
                <Button
                    style={{
                        background: "#009C41",
                        float: "right",
                        border:"1px solid white"
                    }
                    } onClick={logout}> Logout</Button>}

        </Navbar>
        <br />

    </>)
}


export default Menu