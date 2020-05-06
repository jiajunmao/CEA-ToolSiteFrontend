import React from 'react';
import './App.css';

import Header from './layout/Header';
import ttsPage from "./pages/TtsPage";
import LoginPage from './pages/LoginPage';
import {ttsRequest, download } from "./services/NetworkServices";

import {Route, Switch} from 'react-router-dom'

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

    render() {
        return (
            <div className="App">
                <Header/>
                    <Switch>
                        <Route path="/" component={<ttsPage
                            onDownload={this.onDownload}
                            onSubmit={this.onSubmit}
                            progressComplete={this.progressComplete}
                            parentStates={this.state}/>}/>

                        <Route path="login" component={LoginPage}/>
                    </Switch>
            </div>
        );
    }
}

export default App;
