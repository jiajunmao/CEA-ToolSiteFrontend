import React from 'react';
import './App.css';
import {Container, Row} from 'react-bootstrap'

import Header from './component/layout/Header'
import TextInput from './component/pages/TextInput'
import Progress from './component/pages/DownloadProgress'
import DownloadButton from './component/pages/DownloadButton'

import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends React.Component {
  state = {
    submitted: false,
    filename: '',
    downloadCompleted: false
  }

  onSubmit = (input, speed, pitch) => {
    this.setState({submitted: true})
    
    var request = new XMLHttpRequest()
    request.open('POST', 'http://thinkpad.kentailab.org:8082/SpringText/tts/request', true)
    //request.open('POST', 'http://localhost:8081/tts/request', true)
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.setRequestHeader('Content-Type', 'application/json')

    var requestBody = '{'
      + '"email" : "text@test.com",'
      + '"requestText" : "' + input + '",'
      + '"speakingSpeed" : ' + speed + ','
      + '"pitch" : ' + pitch
      + '}'

    console.log(requestBody)
    request.send(requestBody)

    request.onreadystatechange = (e) => {

      if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        var data = JSON.parse(request.responseText)
        this.setState({filename: data.filename})
      }
    }
  }

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
  }

  downloadInitiated = () => {
    this.setState({submitted: false, downloadCompleted: false, filename: ""})
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
