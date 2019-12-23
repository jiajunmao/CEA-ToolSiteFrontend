import React, { Component } from 'react'
import './TextInput.css'

class TextInput extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        input: ''
    }

    onChange = (e) => {
        this.setState({input: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.input)
        this.setState({input: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                <textarea className="inputTextArea"
                    value={this.state.input}
                    onChange={this.onChange}
                    placeholder="Your text..."/>
                </div>
                <input className="btn"
                    type="submit"
                    value="Submit"
                />
            </form>
        )
    }
}


export default TextInput