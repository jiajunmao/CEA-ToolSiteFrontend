import React from 'react';
import './App.css';

import Header from './component/layout/Header'
import TextInput from './component/pages/TextInput'
import Progress from './component/pages/DownloadProgress'
import DownloadButton from './component/pages/DownloadButton'

class App extends React.Component {
  state = {
    submitted: false,
    filename: '',
    downloadCompleted: false
  }

  constructor(props) {
    super(props);
  }

  onSubmit = (input) => {
    this.setState({submitted: true})
    
    var request = new XMLHttpRequest()
    request.open('POST', 'http://thinkpad.kentailab.org:8082/SpringText/tts/request', true)
    request.setRequestHeader('Access-Control-Allow-Origin', '*')

    var requestBody = '{'
      + '"email" : "text@test.com",'
      + '"requestText" : "' + input + '",'
      + '"speakingSpeed" : 1,'
      + '"pitch" : 0'
      + '}'

    console.log(requestBody)
    request.send(requestBody)

    request.onreadystatechange = (e) => {

      if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
        var data = JSON.parse(request.responseText)
        this.setState({filename: data.filename})
      }
    }
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
        <TextInput onSubmit={this.onSubmit}/>
        {this.state.submitted ? <Progress downloadComplete={this.downloadComplete}/> : null}
        {this.state.downloadCompleted ? <DownloadButton downloadInitiated={this.downloadInitiated} filename={this.state.filename}/> : null}
      </div>
    );
  }
}

export default App;
