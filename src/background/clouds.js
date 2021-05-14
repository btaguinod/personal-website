import React, { Component } from 'react'
import Cloud from './cloud'
import './background.css'


const totalClouds = 20;

const cloudSpacing = 150;

// const yScrollOffsetMult = 1;

export default class Clouds extends Component {
    constructor(props) {
        super(props);

        let cloudInfoList = [];

        for (let i = 0; i < totalClouds; i++) {
            
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
                x,
                y,
            })

        }

        this.state = {
            cloudInfoList: cloudInfoList
        }

    }

    render() {
        return (
            <div id="clouds" onClick={this.mouseEvent}>
                {this.state.cloudInfoList.map(cloudInfo =>
                    <Cloud 
                        key={cloudInfo.id} 
                        x={cloudInfo.x} 
                        y={cloudInfo.y} 
                    />
                )}
            </div>
        )
    }
}
