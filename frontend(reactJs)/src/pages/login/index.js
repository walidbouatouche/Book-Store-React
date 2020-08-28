import React from 'react'
import Form from './form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const LoginOrRegister = ({ history }) => {




    function singup(user) {
 alert(user.email)
    }

    function login(user) {
        alert(user.email)
    }



    function restPass(email) {
        alert(" we send new pass in your email")

    }


    return (

        <Row >

            <Col lg={6} >
            <Form   loginOrsingup={login} title={'login'}/>
            </Col>


            <Col lg={6} >
            <Form  loginOrsingup={singup} title={'signup'}/>
            </Col>
        </Row>

       

    )
}

export default LoginOrRegister

