import React, { Component } from 'react'
import Cloud from './cloud'
import './landing.css'

export default class Clouds extends Component {
    static initialYOffset = -20;

    static animationTime = 1000;
    static cloudsPerLayer = 5;
    static layers = 3;
    static loadDate = new Date();
    constructor(props) {
        super(props);
        this.state = {
            x: 10,
            y: 50,
            yOffset: Clouds.initialYOffset,
        }
        this.interval = 0;
    }

    mouseEvent = e => {
        
        // this.setState({
        //     x: e.clientX/window.innerWidth * 100, 
        //     y: 100 - e.clientY/window.innerHeight * 100})
        // console.log(this.state.y)
    }

    animate = () => {
        let end = (Date.now() - Clouds.loadDate.getTime()) > Clouds.animationTime;
        let timePercent = (Date.now() - Clouds.loadDate.getTime())/Clouds.animationTime
        if (end) {
            clearInterval(this.interval);
            return;
        }
        let yOffset = (Clouds.initialYOffset)*(1 - timePercent);
        this.setState({
            x: this.state.x, 
            yOffset: yOffset})
        console.log(yOffset)
    }

    componentDidMount() {
        console.log('mount')
        this.interval = setInterval(this.animate, 1);
    }
    componentWillUnmount() {
        console.log('unmount')
        clearInterval(this.interval);
    }

    render() {
        return (
            <div id="clouds" onClick={this.mouseEvent}>
                <Cloud x={Math.round(this.state.x)} y={this.state.y + this.state.yOffset} width="100" height="100" />
            </div>
        )
    }
}
