import React from 'react'
import Form from './form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Auth from '../../helpers/auth'
import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../../redux/_actions/user.action'
import { Alerts } from '../../compenents/alerts'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect } from 'react-router-dom';

const LoginOrRegister = ({ history }) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();


    function singup(user) {
        dispatch(_userAction.signup(user))

    }

    function login(user) {
        dispatch(_userAction.login(user))
    }


    function makeAuth() {

        //  we receive data from backends
        const { token, userId, role } = state.user.userData

        /* 
        store user details and jwt token in local storage to 
        keep user logged in between page refreshes 

        */
        Auth.setToken(token);
        Auth.setUserId(userId);
        Auth.setRole(role)
        window.location.reload();


    }

    function restPass(email) {
        alert(" we send new pass in your email")

    }

    // if user login  hide login page 
    if (Auth.isAuth()) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <br />
            {state.user.error &&

                <Alerts.AlertDanger text={state.user.error} />

            }

            {state.user.succes &&
                <Alerts.Alertsuccess text={"singup Success!"} >

                </Alerts.Alertsuccess>

            }

            {state.user.userData && makeAuth.call()}
            <Row >

                <Col lg={6} >
                    <Form loginOrsingup={login} title={'login'} />
                </Col>


                <Col lg={6} >
                    <Form loginOrsingup={singup} title={'signup'} />
                </Col>
                {state.user.loading && <Spinner animation="grow" variant="info" />}


            </Row>

        </div>



    )
}

export default LoginOrRegister

