import React from 'react';
import './App.css';
<<<<<<< HEAD
import {Col, Container, Row} from 'react-bootstrap'
=======
import {Container, Row} from 'react-bootstrap'
>>>>>>> e9964d178fad1f29ad6b4822de71ccdad9cf977e

import Header from './component/layout/Header'
import TextInput from './component/pages/TextInput'
import Progress from './component/pages/DownloadProgress'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Button from "@material-ui/core/Button";

import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends React.Component {
  state = {
    submitted: false,
    filename: '',
    downloadReady: false,

<<<<<<< HEAD
    input: "",
    speed: 1.0,
    pitch: 0.0
  }

  handleTextInputChange = (input, speed, pitch) => {
    this.setState({input: input, speed: speed, pitch: pitch})
}

  onSubmit = () => {
    this.setState({submitted: true});

    var request = new XMLHttpRequest();
    request.open('POST', 'http://thinkpad.kentailab.org:8082/SpringText/tts/request', true);
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Content-Type', 'application/json');
=======
  onSubmit = (input, speed, pitch) => {
    this.setState({submitted: true})
    
    var request = new XMLHttpRequest()
    request.open('POST', 'http://thinkpad.kentailab.org:8082/SpringText/tts/request', true)
    //request.open('POST', 'http://localhost:8081/tts/request', true)
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.setRequestHeader('Content-Type', 'application/json')
>>>>>>> e9964d178fad1f29ad6b4822de71ccdad9cf977e

    var requestBody = '{'
      + '"email" : "text@test.com",'
      + '"requestText" : "' + this.state.input + '",'
      + '"speakingSpeed" : ' + this.state.speed + ','
      + '"pitch" : ' + this.state.pitch
      + '}'

    request.send(requestBody)

    request.onreadystatechange = (e) => {

      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        var data = JSON.parse(request.responseText)
          this.setState({filename: data["filename"]})
      }
    }
  }

<<<<<<< HEAD
  onDownload = () => {
      var fileUrl = "http://thinkpad.kentailab.org:8082/SpringText/download/" + this.state.filename
      window.location.href = fileUrl
      this.setState({submitted: false, progressCompleted: false, filename: "", downloadReady: false})
=======
  HomeScreen = () => {
    return (
        <Container>
          <Row><TextInput onSubmit={this.onSubmit}/></Row>
          <Row>{this.state.submitted ? <Progress downloadComplete={this.downloadComplete}/> : null}</Row>
          <Row>{this.state.downloadCompleted ? <DownloadButton downloadInitiated={this.downloadInitiated} filename={this.state.filename}/> : null}</Row>
        </Container>
    );
  }

  downloadComplete = () => {
    this.setState({downloadCompleted: true})
>>>>>>> e9964d178fad1f29ad6b4822de71ccdad9cf977e
  }

  HomeScreen = () => {
    return (
        <Container>
          <Row><TextInput onChange={this.handleTextInputChange}/></Row>
            <Row><div className="progressBar">{this.state.submitted ? <Progress progressComplete={this.progressComplete}/> : null}</div></Row>
            <br/>
          <Row><Col className="text-center">{this.state.downloadReady ? <Button variant="contained" color="primary" onClick={this.onDownload}>Download</Button> :
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
        <br/>
        <br/>
        <br/>

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
