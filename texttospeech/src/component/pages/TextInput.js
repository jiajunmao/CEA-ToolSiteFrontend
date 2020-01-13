import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import {Container, Row, Col} from 'react-bootstrap'
import './TextInput.css'

class TextInput extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        input: '',
        speed: 1.0,
        pitch: 0.0
    }

    onChange = (e) => {
        this.setState({input: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.input, this.state.speed, this.state.pitch)
        this.setState({input: '', speech: 1.0, pitch: 0.0})
    }

    handleSpeedSlider = (event, value) => {
        this.setState({speed: value})
    }
    
    handlePitchSlider = (event, value) => {
        this.setState({pitch: value})
    }

    render() {
        return (
            <Container>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
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

                    <Row className="black-border">
                        <Col className="sliderCol" md={5}>
                            <RemoveCircleIcon/>

                            <Slider
                                defaultValue={1}
                                value={this.state.speed}
                                onChange={this.handleSpeedSlider}
                                step={0.25}
                                valueLabelDisplay="auto"
                                min={0.25}
                                max={4.0}
                                marks/>

                            <AddCircleIcon />
                        </Col>

                        <Col className="sliderCol" md={5}>
                            <RemoveCircleIcon/>

                            <Slider
                                defaultValue={0}
                                value={this.state.pitch}
                                onChange={this.handlePitchSlider}
                                step={2}
                                valueLabelDisplay="auto"
                                min={-20}
                                max={20}
                                marks/>

                            <AddCircleIcon />
                        </Col>
                    </Row>

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