import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import './Hub.css'
import plusSign from '../plus512.png'

class Hub extends Component {
    
    render() {
        return (
            <Container className="stage">
                <Row>
                    <Col sm={4} className="center-block"><img height='80vmin' src={plusSign}/></Col>
                    <Col sm={4} className="center-block"><img height='80vmin' src={plusSign}/></Col>
                    <Col sm={4} className="center-block"><img height='80vmin' src={plusSign}/></Col>
                </Row>

                <Row>
                    <Col sm={4} className="center-block"><img height='80vmin' src={plusSign}/></Col>
                    <Col sm={4} className="center-block"><img height='80vmin' src={plusSign}/></Col>
                    <Col sm={4} className="center-block"><img height='80vmin' src={plusSign}/></Col>
                </Row>
            </Container>
        )
    }
}

export default Hub