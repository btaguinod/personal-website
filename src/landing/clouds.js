import React, { Component } from 'react'
import Cloud from './cloud'
import './landing.css'

export default class Clouds extends Component {
    static cloudsPerLayer = 5;
    static layers = 3;
    constructor(props) {
        super(props);
        this.state = {
            x: 10,
            y: 10,
        }
        this.ref = React.createRef();
    }

    mouseEvent = e => {
        
        this.setState({
            x: e.clientX/window.innerWidth * 100, 
            y: e.clientY/window.innerHeight * 100})
        // console.log(this.state)
    }

    render() {
        // console.log(this.state.x)
        return (
            <div id="clouds" onClick={this.mouseEvent}>
                <Cloud x={Math.round(this.state.x)} y={this.state.y} width="100" height="100" />
            </div>
        )
    }
}
