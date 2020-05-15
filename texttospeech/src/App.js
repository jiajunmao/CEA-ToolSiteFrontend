import React from 'react';
import './App.css';

import Header from './layout/Header';
import ttsPage from "./pages/TtsPage";
import LoginPage from './pages/LoginPage';
import {ttsRequest, download } from "./services/NetworkServices";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TtsPage from "./pages/TtsPage";

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

    HomeScreen = () => <TtsPage
        onDownload={this.onDownload}
        onSubmit={this.onSubmit}
        progressComplete={this.progressComplete}
        parentStates={this.state}/>

    LoginScreen = () => <LoginPage/>

    render() {
        return (
            <div className="App">
                <Header/>
                <Router>
                    <Switch>
                        <Route path="/" exact component={this.HomeScreen}/>
                        <Route path="/login" exact component={this.LoginScreen}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
