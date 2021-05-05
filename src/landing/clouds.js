import React, { Component } from 'react'
import Cloud from './cloud'
import './landing.css'

const totalClouds = 20;
const layers = 5;

const cloudSpacing = 150;
export default class Clouds extends Component {
    constructor(props) {
        super(props);
        
        this.stage = 0;

        let cloudInfoList = [];

        for (let i = 0; i < totalClouds; i++) {
            let layer = Math.floor(Math.random()*layers);
            
            let x = Math.random()*100;
            let y = Math.random()*80 + 10;

            for (let k = 0; k < cloudInfoList.length; k++) {
                let xPercent = cloudInfoList[k].x-x;
                let yPercent = cloudInfoList[k].y-y;
                let distance = Math.sqrt((xPercent*window.innerWidth*.01)**2+(yPercent*window.innerHeight*.01)**2)

                if (distance < cloudSpacing) {
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
