import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import Auth from '../helpers/auth'
import Button from 'react-bootstrap/Button'
import DropDown from '../compenents/dropDown'

const Menu = () => {

    const logout = () => {
        Auth.clearAll()
    }
    return (<>
        <Navbar style={{ background: "#009C41" }} variant="dark">
            <Navbar.Brand as={Link} to="/" > Book  store</Navbar.Brand>
            <Nav className="mr-auto">
                {!Auth.isAuth() && <Nav.Link as={Link} to="/login">Login</Nav.Link>}


            </Nav>
            <div style={{
                background: "#009C41",
                float: "right",
                border: "1px solid white",
                marginRight: "50px",
                background: "gray"
            }
            } >

                {Auth.isAuth() &&
                    <DropDown title={ Auth.getImgUrl() && <img  style={{height:'50px', width:'50px',borderRadius:"50%"}} src={Auth.getImgUrl()} />}>

                        {Auth.getRole() == "admin" && <Nav.Link as={Link} to="/admin">Book Admin</Nav.Link>}
                        <Nav.Link as={Link} to="/favori">Favoris</Nav.Link>
                        <Nav.Link as={Link} to="/profil">Profil</Nav.Link>

                        <Nav.Link onClick={logout}  >logout</Nav.Link>

                    </DropDown>
                }

            </div>
        </Navbar>
        <br />

    </>)
}


export default Menu