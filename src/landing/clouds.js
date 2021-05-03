import React, { Component } from 'react'
import Cloud from './cloud'
import './landing.css'

export default class Clouds extends Component {
    static initialYOffset = -100;
    static animationTime = 2000;

    static maxWidth = 250;
    static minWidth = 150;
    static maxHeight = 150;
    static minHeight = 100;

    static cloudsPerLayer = 7;
    static layers = 4;

    static sizeLayerDiff = 0.15;
    static speedLayerDiff = 0.05;


    static loadDate = new Date();
    constructor(props) {
        super(props);
        
        let cloudInfo = [];

        for (let i = 0; i < Clouds.layers; i++) {
            let layer = [];
            for (let j = 0; j < Clouds.cloudsPerLayer; j++) {
                let width = (Math.random()*(Clouds.maxWidth- Clouds.minWidth) + Clouds.minWidth)*(1 - i*Clouds.sizeLayerDiff);
                let height = (Math.random()*(Clouds.maxHeight - Clouds.minHeight) + Clouds.minHeight)*(1 - i*Clouds.sizeLayerDiff);
                
                let x = Math.random()*100;
                let y = Math.random()*80 + 10;

                for (let i = 0; i < layer.length; i++) {
                    let distance = Math.sqrt((layer[i].x-x)**2+(layer[i].y-y)**2)
                    if (distance > Math.max(width, height, layer[i].width, layer[i].height)) {
                        i = -1;
                        continue;
                    }
                }

                layer.push({
                    width: width,
                    height: height,
                    x: x,
                    y: y,
                    yOffset: Clouds.initialYOffset *(1 - Clouds.speedLayerDiff*i),
                    opacity: Cloud.opacity*(1 - i*.1)
                })
            }
            cloudInfo.push(layer);
        }

        console.log(cloudInfo)

        this.state = {
            cloudInfo: cloudInfo
            // x: 10,
            // y: 50,
            // yOffset: Clouds.initialYOffset,
        }
        this.interval = 0;
    }

    mouseEvent = e => {
        
        // this.setState({
        //     x: e.clientX/window.innerWidth * 100, 
        //     y: 100 - e.clientY/window.innerHeight * 100})
        // console.log(this.state.y)
        console.log(this.state.cloudInfo.map(layer => layer.map(
            cloudInfo => cloudInfo )
        ))
    }

    animate = () => {
        let end = (Date.now() - Clouds.loadDate.getTime()) > Clouds.animationTime;
        let timePercent = (Date.now() - Clouds.loadDate.getTime())/Clouds.animationTime
        if (end) {
            clearInterval(this.interval);
            return;
        }
        let newState = {...this.state};
        let yOffset = (Clouds.initialYOffset)*(1 - timePercent);
        for (let i = 0; i < Clouds.layers; i++) {
            for (let j = 0; j < Clouds.cloudsPerLayer; j++) {
                newState.cloudInfo[i][j].yOffset = yOffset*(1 - i*Clouds.speedLayerDiff)
            }
        }
        
        this.setState({
            newState
        });
            
        // console.log(yOffset)
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
                {this.state.cloudInfo.map(layer => layer.map(
                    cloudInfo => 
                    <Cloud key={cloudInfo.id} x={Math.round(cloudInfo.x)} y={cloudInfo.y + cloudInfo.yOffset} width={cloudInfo.width} height={cloudInfo.height} />)
                )}
                
            </div>
        )
    }
}
