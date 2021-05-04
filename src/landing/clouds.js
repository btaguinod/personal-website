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

    static opacity = 0.9;

    static cloudsPerLayer = 5;
    static layers = 5;

    static speedLayerDiff = 0.1;
    static sizeLayerDiff = 0.1;
    static opacityLayerDiff = 0.1;


    static loadDate = new Date();
    constructor(props) {
        super(props);
        
        let cloudInfo = [];

        for (let i = 0; i < Clouds.layers; i++) {
            for (let j = 0; j < Clouds.cloudsPerLayer; j++) {
                let width = (Math.random()*(Clouds.maxWidth- Clouds.minWidth) + Clouds.minWidth)*(1 - i*Clouds.sizeLayerDiff);
                let height = (Math.random()*(Clouds.maxHeight - Clouds.minHeight) + Clouds.minHeight)*(1 - i*Clouds.sizeLayerDiff);
                
                let x = Math.random()*100;
                let y = Math.random()*80 + 10;

                for (let k = 0; k < cloudInfo.length; k++) {
                    let percentX = cloudInfo[k].x-x;
                    let percentY = cloudInfo[k].y-y;
                    let distance = Math.sqrt((percentX*window.innerWidth*.01)**2+(percentY*window.innerHeight*.01)**2)

                    if (distance < Math.min(width, height, cloudInfo[k].width, cloudInfo[k].height)) {
                        x = Math.random()*100;
                        y = Math.random()*80 + 10;

                        k = -1;
                        continue;
                    }
                }

                console.log(Clouds.opacity*(1 - Clouds.opacityLayerDiff*i))

                cloudInfo.push({
                    layer: i,
                    width: width,
                    height: height,
                    x: x,
                    y: y,
                    yOffset: Clouds.initialYOffset *(1 - Clouds.speedLayerDiff*i),
                    opacity: Clouds.opacity*(1 - Clouds.opacityLayerDiff*i)
                })
            }
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
        
        console.log(this.state.cloudInfo[0])
    }

    animate = () => {
        let end = (Date.now() - Clouds.loadDate.getTime()) > Clouds.animationTime;
        let timePercent = (Date.now() - Clouds.loadDate.getTime())/Clouds.animationTime
        if (end) {
            clearInterval(this.interval);
            return;
        }
        let newState = {...this.state};
        // Linear version
        // let yOffset = (Clouds.initialYOffset)*(1 - timePercent);

        let yOffset = ((timePercent - 1)**2)*Clouds.initialYOffset;
        for (let cloud of newState.cloudInfo) {
            cloud.yOffset = yOffset*(1 - cloud.layer*Clouds.speedLayerDiff)
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
                {this.state.cloudInfo.map(cloudInfo =>
                    <Cloud key={cloudInfo.id} x={Math.round(cloudInfo.x)} y={cloudInfo.y + cloudInfo.yOffset} width={cloudInfo.width} height={cloudInfo.height} opacity={cloudInfo.opacity}/>
                )}
                
            </div>
        )
    }
}
