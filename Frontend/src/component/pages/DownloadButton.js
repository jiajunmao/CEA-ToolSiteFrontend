import React, { Component } from 'react'

class DownloadButton extends Component {
    constructor() {
        super()
    }

    onClick = () => {
        var fileUrl = "http://thinkpad.kentailab.org:8082/SpringText/download/" + this.props.filename
        console.log(fileUrl)
        window.location.href= fileUrl
    }

    render() {
        
        return(
            <button className="btn" onClick={this.onClick}>Download</button>
        )
    }
}

export default DownloadButton