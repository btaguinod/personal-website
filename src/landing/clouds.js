import React, { Component } from 'react'
import Cloud from './cloud'
import './landing.css'
import _ from 'lodash'

export default class Clouds extends Component {
    static initialYOffset = -200;
    static appearTime = 250;
    static openAnimTime = 1750;
    static idleSpeed = 1;

    static maxWidth = 250;
    static minWidth = 150;
    static maxHeight = 150;
    static minHeight = 100;

    static opacity = 0.9;

    static totalClouds = 50;
    static layers = 5;

    static speedLayerDiff = 0.1;
    static sizeLayerDiff = 0.075;
    static opacityLayerDiff = 0.2;

    constructor(props) {
        super(props);
        
        this.stage = 0;

        let cloudInfoList = [];

        for (let i = 0; i < Clouds.totalClouds; i++) {
            let layer = Math.floor(Math.random()*Clouds.layers);

            let width = (Math.random()*(Clouds.maxWidth - Clouds.minWidth) + Clouds.minWidth)*(1 - layer*Clouds.sizeLayerDiff);
            let height = (Math.random()*(Clouds.maxHeight - Clouds.minHeight) + Clouds.minHeight)*(1 - layer*Clouds.sizeLayerDiff);
            
            let x = Math.random()*100;
            let y = Math.random()*80 + 10;

            for (let k = 0; k < cloudInfoList.length; k++) {
                let xPercent = cloudInfoList[k].x-x;
                let yPercent = cloudInfoList[k].y-y;
                let distance = Math.sqrt((xPercent*window.innerWidth*.01)**2+(yPercent*window.innerHeight*.01)**2)

                if (distance < Math.min(width, height, cloudInfoList[k].width, cloudInfoList[k].height)) {
                    x = Math.random()*100;
                    y = Math.random()*80 + 10;

                    k = -1;
                    continue;
                }
            }

            // console.log(Clouds.opacity*(1 - Clouds.opacityLayerDiff*layer))

            cloudInfoList.push({
                id: i,
                layer,
                width,
                height,
                x,
                y,
                yAnimOffset: Clouds.initialYOffset *(1 - Clouds.speedLayerDiff*layer),
                opacity: Clouds.opacity*(1 - Clouds.opacityLayerDiff*layer)
            })

        }

        this.state = {
            cloudInfoList: cloudInfoList
        }


    }

    mouseEvent = e => {
        
        console.log(this.state.cloudInfoList[0])
    }

    openAnimation = () => {
        let timePercent = (Date.now() - this.startAnimDate.getTime())/Clouds.openAnimTime

        let newState = _.cloneDeep(this.state);

        // Linear version
        // let yOffset = (Clouds.initialYOffset)*(1 - timePercent);

        let yAnimOffset = ((timePercent - 1)**2)*Clouds.initialYOffset;
        for (let cloud of newState.cloudInfoList) {
            cloud.yAnimOffset = yAnimOffset*(1 - cloud.layer*Clouds.speedLayerDiff)
        }
        
        this.setState(newState);
    }

    idleAnimation = () => {
        let newState = _.cloneDeep(this.state);

        for (let cloud of newState.cloudInfoList) {
            let x = (cloud.x + Clouds.idleSpeed*(1 - cloud.layer*Clouds.speedLayerDiff)*0.01)
            if (x > 100 + 100*cloud.width/(2*window.innerWidth)) {
                x = -100*cloud.width/(2*window.innerWidth)
            }
            cloud.x = x
        }
        this.setState(newState);
    }

    componentDidMount() {
        console.log('mount')
        setTimeout(() => {
            this.startAnimDate = new Date();
            this.openAnimInterval = setInterval(this.openAnimation, 1);
            setTimeout(() => {clearInterval(this.openAnimInterval);}, Clouds.openAnimTime);
        }, Clouds.appearTime)
        this.idleAnimInterval = setInterval(this.idleAnimation, 1);

    }
    componentWillUnmount() {
        console.log('unmount')
        clearInterval(this.openAnimInterval);
        clearInterval(this.idleAnimInterval);
    }

    render() {
        return (
            <div id="clouds" onClick={this.mouseEvent}>
                {this.state.cloudInfoList.map(cloudInfo =>
                    <Cloud 
                        key={cloudInfo.id} 
                        x={cloudInfo.x} 
                        y={cloudInfo.y + cloudInfo.yAnimOffset} 
                        width={cloudInfo.width} 
                        height={cloudInfo.height} 
                        opacity={cloudInfo.opacity}
                    />
                )}
                
            </div>
        )
    }
}
