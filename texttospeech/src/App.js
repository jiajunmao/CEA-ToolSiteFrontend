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
    request.open('GET', 'http://thinkpad.kentailab.org:8082/SpringText/tts/request?email=test@test.com&text=' + input, true)
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.send()

    var count = 0;

    request.onreadystatechange = (e) => {

      if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
        console.log(request.responseText)
        console.log(count)

        var data = JSON.parse(request.responseText)
        count++

        this.setState({filename: data.filename})
      }
    }
  }

  downloadComplete = () => {
    this.setState({downloadCompleted: true})
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <TextInput onSubmit={this.onSubmit}/>
        {this.state.submitted ? <Progress downloadComplete={this.downloadComplete}/> : null}
        {this.state.downloadCompleted ? <DownloadButton filename={this.state.filename}/> : null}
      </div>
    );
  }
}

export default App;
