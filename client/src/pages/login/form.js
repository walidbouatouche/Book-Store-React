import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Form_(there are other Form )
const Form_ = ({ loginOrsingup, title }) => {

    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setMail(e.target.value)
    }

    const _loginOrsingup = (e) => {
        e.preventDefault()
        loginOrsingup({ email, password })
    }
    return (
        <Form onSubmit={_loginOrsingup} >
             <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required maxLength={"30"} minLength={"10"}o onChange={handleEmail} type="email" placeholder="Enter email" />
           
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required  maxLength={"30"} minLength={"8"}onChange={handlePassword} type="password" placeholder="Password" />
            </Form.Group>

            <Button  style={{background:"#009C41"}}   type="submit">
                {title}
            </Button>
        </Form>

    )
}


export default Form_;