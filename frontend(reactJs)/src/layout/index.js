import React, { Component } from 'react'
import Menu from '../compenents/menu'

import { Helmet } from "react-helmet"
import Container from 'react-bootstrap/Container'
//The main layout that appears on all pages
const Layout = ({ children }) => {
    return (
        <div >
            <Helmet>
                <title>Book store</title>
                <meta name="description" content="Book store first store for Books" />
                <meta name="keywords" content="js-tutorials,keyword,listing" />
            </Helmet>
            <Menu />
            <Container>

                {children}

               
            </Container>
        </div>
    );

}

export default Layout