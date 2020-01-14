import React, { Component } from 'react'

class DownloadButton extends Component {

    onClick = () => {
        var fileUrl = "http://thinkpad.kentailab.org:8082/SpringText/download/" + this.props.filename
        window.location.href = fileUrl
        this.props.downloadInitiated()
    }

    render() {
        return(
            <button className="btn" onClick={this.onClick}>Download</button>
        )
    }
}

export default DownloadButton