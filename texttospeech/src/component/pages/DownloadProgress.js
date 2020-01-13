import React, { Component } from 'react'
import { Line } from 'rc-progress'
import './DownloadProgress.css'

class DownloadProgress extends Component {
    constructor() {
        super()
        this.state = {
            downloadCompleted: false,
            progress: 0
        }
        
        this.step = this.step.bind(this)
    }
    

    step = () => {
        const { progress } = this.state;
        var newPercent = progress + 1
        if(progress > 100) {
            clearTimeout(this.tm)
            this.props.downloadComplete()
            return
        }
        this.setState({progress: newPercent})
        this.tm = setTimeout(this.step, 20)
    }

    componentDidMount() {
        this.step()
    }

    render (){
        const { progress } = this.state
        return (
            <Line className="progressBar" percent={progress} strokeWidth="1"/>
        )
    }
}

export default DownloadProgress