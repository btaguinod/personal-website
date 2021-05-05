import React, { Component } from 'react'
import Cloud from './cloud'
import './landing.css'

export default class Clouds extends Component {
    static totalClouds = 20;
    static layers = 5;

    static cloudSpacing = 150;

    constructor(props) {
        super(props);
        
        this.stage = 0;

        let cloudInfoList = [];

        for (let i = 0; i < Clouds.totalClouds; i++) {
            let layer = Math.floor(Math.random()*Clouds.layers);
            
            let x = Math.random()*100;
            let y = Math.random()*80 + 10;

            for (let k = 0; k < cloudInfoList.length; k++) {
                let xPercent = cloudInfoList[k].x-x;
                let yPercent = cloudInfoList[k].y-y;
                let distance = Math.sqrt((xPercent*window.innerWidth*.01)**2+(yPercent*window.innerHeight*.01)**2)

                if (distance < Clouds.cloudSpacing) {
                    x = Math.random()*100;
                    y = Math.random()*80 + 10;

                    k = -1;
                    continue;
                }
            }

            cloudInfoList.push({
                id: i,
                layer,
                x,
                y,
            })

        }

        this.state = {
            cloudInfoList: cloudInfoList
        }


    }

    mouseEvent = e => {
        
        // console.log(this.state.cloudInfoList[0])
    }

    render() {
        return (
            <div id="clouds" onClick={this.mouseEvent}>
                {this.state.cloudInfoList.map(cloudInfo =>
                    <Cloud 
                        key={cloudInfo.id} 
                        layer={cloudInfo.layer}
                        x={cloudInfo.x} 
                        y={cloudInfo.y} 
                    />
                )}
            </div>
        )
    }
}
