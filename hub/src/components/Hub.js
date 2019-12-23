import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import plusSign from "../plus512.png"

class Hub extends Component {
    
    render() {
        return (
            <Container className="stage">
                <Row>
                    <img sm={1} className="center-block" src={plusSign}/>
                    <img sm={1} className="center-block" src={plusSign}/>
                    <img sm={1} className="center-block" src={plusSign}/>
                </Row>

                <Row>
                    <img sm={1} className="center-block" src={plusSign}/>
                    <img sm={1} className="center-block" src={plusSign}/>
                    <img sm={1} className="center-block" src={plusSign}/>
                </Row>
            </Container>
        )
    }
}

export default Hub