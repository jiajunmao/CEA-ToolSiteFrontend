import React from 'react'
import {Slider, TextField} from "@material-ui/core";
import {Col, Container, Row} from 'react-bootstrap'
import './TextInput.css'

class TextInput extends React.Component {

    handleTextArea = (e) => {
        this.props.updateInput(e.target.value);
    };

    handleSpeedSlider = (event, value) => {
        this.props.updateSpeed(value);
    };

    handlePitchSlider = (event, value) => {
        this.props.updatePitch(value);
    }


    render() {
        return (
            <Container>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
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
                        value={this.props.parentState.input}
                    />
                </Row>

                <Row>
                    <Col md={6}>
                        <div className="d-flex">
                            <Slider
                                defaultValue={1}
                                value={this.props.parentState.speed}
                                onChange={this.handleSpeedSlider}
                                step={0.25}
                                valueLabelDisplay="on"
                                min={0.25}
                                max={4.0}
                                marks/>
                        </div>
                        <div className="sliderTitle">
                            Speed
                        </div>
                    </Col>

                    <Col md={6}>
                        <div style={{"display": "flex"}}>
                            <Slider
                                defaultValue={0}
                                value={this.props.parentState.pitch}
                                onChange={this.handlePitchSlider}
                                step={2}
                                valueLabelDisplay="on"
                                min={-20}
                                max={20}
                                marks/>
                        </div>
                        <div className="sliderTitle">
                            Pitch
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TextInput