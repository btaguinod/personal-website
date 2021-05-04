import React, { Component } from 'react'
import _ from 'lodash'

export default class Cloud extends Component {
    static hoverAnimSpeed = 1;

    constructor(props) {
        super(props);
        let x = this.props.x-.5*this.props.width/window.innerWidth*100
        let y = this.props.y-.5*this.props.height/window.innerHeight*100
        this.state = {
            offsets: {
                widthOffset: 0,
                heightOffset: 0,
                opacityOffset: 0
            },
            style: {
                width: this.props.width,
                height: this.props.height,
                left: x,
                bottom: y,
                opacity: this.props.opacity
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            let trueWidthPercent = (this.props.width + this.state.offsets.widthOffset)/window.innerWidth
            let trueHeightpercent = (this.props.height + this.state.offsets.heightOffset)/window.innerHeight

            let x = this.props.x-.5*trueWidthPercent*100
            let y = this.props.y-.5*trueHeightpercent*100

            let newState = _.cloneDeep(this.state);
            
            newState.style.left = x;
            newState.style.bottom = y;
            this.setState(
                newState
            )
        }
    }

    mouseEnter = e => {
        clearInterval(this.shrinkInterval)
        this.growInterval = setInterval(() => {
            let newState = _.cloneDeep(this.state);

            if (this.state.style.opacity + newState.offsets.opacityOffset >= 1) {
                clearInterval(this.growInterval)
                return;
            }

            newState.offsets.widthOffset += 0.1;
            newState.offsets.heightOffset += 0.1;
            newState.offsets.opacityOffset += 0.01;

            this.setState(newState);
        }, 1)
    }

    mouseLeave = e => {
            clearInterval(this.growInterval)
            this.shrinkInterval = setInterval(() => {
            let newState = {
                offsets: {...this.state.offsets},
                style: {...this.state.style}
            }

            if (newState.offsets.opacityOffset <= 0) {
                clearInterval(this.shrinkInterval)
                return
            }

            newState.offsets.widthOffset -= 0.1;
            newState.offsets.heightOffset -= 0.1;
            newState.offsets.opacityOffset -= 0.01;

            this.setState(newState);
        }, 1)
    }

    componentWillUnmount() {
        clearInterval(this.growInterval)
        clearInterval(this.shrinkInterval)
    }

    render() {
        let style = {...this.state.style}

        style.width = (style.width + this.state.offsets.widthOffset) + 'px';
        style.height = (style.height + this.state.offsets.heightOffset) + 'px';
        style.left = style.left + 'vw';
        style.bottom = style.bottom + 'vh';
        style.opacity = (style.opacity + this.state.offsets.opacityOffset).toString();

        return (
            <div 
                onMouseEnter={this.mouseEnter} 
                onMouseLeave={this.mouseLeave}
                className="cloud" 
                style={style} 
            />
        )
    }
}
