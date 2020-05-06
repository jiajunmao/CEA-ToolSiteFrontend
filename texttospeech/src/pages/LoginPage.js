import {Col, Container, Row} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";

class LoginPage extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <TextField
                        id="Email-Input"
                        label="Email"
                    />
                    <TextField
                        id="Password-Input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"/>
                </Row>

                <Row>
                    <Button variant="container" color="primary">Login</Button>
                </Row>
            </Container>
        )
    }
}