import {Col, Container, Row} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import './LoginPage.css'

class LoginPage extends React.Component {

    render() {
        return (
            <Container>
                <Row className='flex-field'>
                    <TextField
                        id="Email-Input"
                        label="Email"
                    />
                </Row>

                <Row className='flex-field'>
                        <TextField
                            id="Password-Input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"/>
                </Row>

                <Row className='login-button'>
                    <Button color="primary">Login</Button>
                </Row>
            </Container>
        )
    }
}

export default LoginPage