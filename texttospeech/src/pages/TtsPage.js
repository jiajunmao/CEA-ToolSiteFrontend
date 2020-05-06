import {Col, Container, Row} from "react-bootstrap";
import TextInput from "../component/TextInput";
import Progress from "../component/DownloadProgress";
import Button from "@material-ui/core/Button";
import React from "react";

class TtsPage extends React.Component {
    render() {
        return (
            <Container>
                <Row><TextInput
                    parentState={this.props.parentStates}
                    updateInput={this.props.parentStates.input}
                    updateSpeed={this.props.parentStates.speed}
                    updatePitch={this.props.parentStates.pitch}/></Row>
                <Row>
                    <div className="progressBar">{this.props.parentStates.submitted ?
                        <Progress progressComplete={this.props.progressComplete}/> : null}</div>
                </Row>
                <Row><Col className="text-center">{this.props.parentStates.downloadReady ?
                    <Button variant="contained" color="primary" onClick={this.props.onDownload}>Download</Button> :
                    <Button variant="contained" color="primary" onClick={this.props.onSubmit}>Submit</Button>}</Col>
                </Row>
            </Container>
        );
    };
}

export default ttsPage