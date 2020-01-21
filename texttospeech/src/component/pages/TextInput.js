import React, {Component} from 'react'
import {Slider, TextField} from "@material-ui/core";
import {Col, Container, Row} from 'react-bootstrap'
import './TextInput.css'

class TextInput extends Component {
    state = {
        input: "",
        speed: 1.0,
        pitch: 0.0
    };

    onChange = () => {
        this.props.onChange(this.state.input, this.state.speed, this.state.pitch);
    }

    handleTextArea = (e) => {
        this.setState({input: e.target.value}, () => {
            this.onChange();
        });
    };

    handleSpeedSlider = (event, value) => {
        this.setState({speed: value}, () => {
            this.onChange();
        })
    };

    handlePitchSlider = (event, value) => {
        this.setState({pitch: value}, () => {
            this.onChange();
        });
    }

    render() {
        return (
            <Container>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                <Row className="form">
                    <TextField
                        id="outlined-multiline-static"
                        label="Text Input"
                        multiline
                        rows="10"
                        rowsMax="10"
                        onChange={this.handleTextArea}
                        placeholder="Your text here..."
                        autoFocus={true}
                        fullWidth={true}
                        variant="outlined"
                    />
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
                        <div style={{"display": "flex"}}>
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
            </Container>
        )
    }
}


export default TextInput