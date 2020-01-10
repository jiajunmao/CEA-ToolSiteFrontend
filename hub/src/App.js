import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Hub from './components/Hub'
import Login from './components/Login'


class App extends Component {
  
  state = {
    logined: true
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.state.logined ? null : <Login/>}
          {this.state.logined ? <Hub/> : null}
        </div>
      </div>
    )
  }
}

export default App;
