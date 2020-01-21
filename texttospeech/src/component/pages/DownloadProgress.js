import React from 'react'
import {Container} from "react-bootstrap";
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
import './DownloadProgress.css'

class LinearDeterminate extends React.Component{
    constructor() {
        super()
        this.state = {
            completed: 0
        }

        this.step = this.step.bind(this)
    }

    step = () => {
        const { completed } = this.state;
        var newCompleted = completed + 1;
        if (completed > 100) {
            this.setState({completed: 100})
            clearTimeout(this.tm);
            this.props.progressComplete();
            return;
        }

        this.setState({completed: newCompleted});
        this.tm = setTimeout(this.step, 20);
    }

    componentDidMount() {
        this.step()
    }

    render() {
        return (
            <Container>
                <LinearProgress variant="determinate" value={this.state.completed}/>
            </Container>
        )
    }
}

export default LinearDeterminate