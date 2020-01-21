import React from 'react'
import {Container} from "react-bootstrap";
<<<<<<< HEAD
import LinearProgress from '@material-ui/core/LinearProgress'
import './DownloadProgress.css'

class LinearDeterminate extends React.Component {
=======
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
import './DownloadProgress.css'

class LinearDeterminate extends React.Component{
>>>>>>> 31bbd7023fd57a9dcd1ac263d9b6426e28ab59d2
    constructor() {
        super()
        this.state = {
            completed: 0
        }

        this.step = this.step.bind(this)
    }

    step = () => {
<<<<<<< HEAD
        const {completed} = this.state;
=======
        const { completed } = this.state;
>>>>>>> 31bbd7023fd57a9dcd1ac263d9b6426e28ab59d2
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