import React from 'react';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap'

import Header from './component/layout/Header'
import TextInput from './component/pages/TextInput'
import Progress from './component/pages/DownloadProgress'
import {ttsRequest} from "./component/services/NetworkServices";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Button from "@material-ui/core/Button";

class App extends React.Component {
    state = {
        submitted: false,
        filename: '',
        downloadReady: false,

        input: "",
        speed: 1.0,
        pitch: 0.0
    }

    handleTextInputChange = (input, speed, pitch) => {
        this.setState({input: input, speed: speed, pitch: pitch})
    }

    setFileName = (fileName) => {
        this.setState({filename: fileName})
    }

    onSubmit = () => {
        this.setState({submitted: true});

        ttsRequest(this.state.input, this.state.speed, this.state.pitch, this.setFileName);
    }

    onDownload = () => {
        var fileUrl = "http://thinkpad.kentailab.org:8082/SpringText/download/" + this.state.filename
        window.location.href = fileUrl
        this.setState({submitted: false, progressCompleted: false, filename: "", downloadReady: false})
    }

    HomeScreen = () => {
        return (
            <Container>
                <Row>
                    <div><br/><br/><br/><br/></div>
                </Row>
                <Row><TextInput onChange={this.handleTextInputChange}/></Row>
                <Row>
                    <div className="progressBar">{this.state.submitted ?
                        <Progress progressComplete={this.progressComplete}/> : null}</div>
                </Row>
                <br/>
                <Row><Col className="text-center">{this.state.downloadReady ?
                    <Button variant="contained" color="primary" onClick={this.onDownload}>Download</Button> :
                    <Button variant="contained" color="primary" onClick={this.onSubmit}>Submit</Button>}</Col>
                </Row>
            </Container>
        );
    }

    progressComplete = () => {
        this.setState({downloadReady: true})
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
                    <Switch>
                        <Route path="/" component={this.HomeScreen}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
