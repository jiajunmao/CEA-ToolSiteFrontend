import React from 'react';
import './App.css';

import {Col, Container, Row} from 'react-bootstrap'
import Header from './component/layout/Header'
import TextInput from './component/pages/TextInput'
import Progress from './component/pages/DownloadProgress'
import {ttsRequest, download } from "./component/services/NetworkServices";

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
    };

    setInput = (input) => {
        this.setState({input: input});
    };

    setSpeed = (speed) => {
        this.setState({speed: speed});
    };

    setPitch = (pitch) => {
        this.setState({pitch: pitch});
    };

    progressComplete = () => {
        this.setState({downloadReady: true});
    };

    onSubmit = () => {
        this.setState({submitted: true});
        ttsRequest(this.state.input, this.state.speed, this.state.pitch, (data) => {
            this.setState({filename: data});
        });
    };

    onDownload = () => {
        download(this.state.filename, () => {
            this.setState({submitted: false, progressCompleted: false, filename: "", downloadReady: false, input: "", speed: 1.0, pitch: 0.0});
        });
    };

    HomeScreen = () => {
        return (
            <Container>
                <Row><div><br/><br/><br/><br/></div></Row>
                <Row><TextInput parentState={this.state} updateInput={this.setInput} updateSpeed={this.setSpeed} updatePitch={this.setPitch}/></Row>
                <Row>
                    <div className="progressBar">{this.state.submitted ?
                        <Progress progressComplete={this.progressComplete}/> : null}</div>
                </Row>
                <Row><Col className="text-center">{this.state.downloadReady ?
                    <Button variant="contained" color="primary" onClick={this.onDownload}>Download</Button> :
                    <Button variant="contained" color="primary" onClick={this.onSubmit}>Submit</Button>}</Col>
                </Row>
            </Container>
        );
    };

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
