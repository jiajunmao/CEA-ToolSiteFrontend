import React, {Component} from 'react'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import {Col, Container, Row} from 'react-bootstrap'
import './TextInput.css'

class TextInput extends Component {
    state = {
        input: '',
        speed: 1.0,
        pitch: 0.0
    };

    constructor(props) {
        super(props)
    }

    onChange = (e) => {
        this.setState({input: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.input, this.state.speed, this.state.pitch);
        this.setState({input: '', speech: 1.0, pitch: 0.0});
    };

    handleSpeedSlider = (event, value) => {
        this.setState({speed: value})
    };

    handlePitchSlider = (event, value) => {
        this.setState({pitch: value})
    }

    render() {
        return (
            <Container>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                <Row className="form">
                    <textarea className="inputTextArea"
                              value={this.state.input}
                              onChange={this.onChange}
                              placeholder="Your text..."/>
                </Row>

                <Row>
                    <Col className="text-center">Speed</Col>
                    <Col className="text-center">Pitch</Col>
                </Row>

                <Row>

                    <Col md={6}>
                        <div className="d-flex">
                            <Slider
                                defaultValue={0}
                                value={this.state.pitch}
                                onChange={this.handlePitchSlider}
                                step={2}
                                valueLabelDisplay="auto"
                                min={-20}
                                max={20}
                                marks/>

                        </div>
                    </Col>

                    <Col md={6}>
                        <div style={{"display" : "flex"}}>
                            <Slider
                                defaultValue={1}
                                value={this.state.speed}
                                onChange={this.handleSpeedSlider}
                                step={0.25}
                                valueLabelDisplay="auto"
                                min={0.25}
                                max={4.0}
                                marks/>
                        </div>
                    </Col>
                </Row>
                
                <br></br>
                <br></br>

                <Row className="text-center">
                    <Col>
                        <Button variant="contained" color="primary" onClick={this.onSubmit}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default TextInput