import React, { Component } from 'react'
import _ from 'lodash'

export default class Cloud extends Component {
    static hoverAnimSpeed = 1;

    static initialYOffset = -200;
    static appearTime = 250;
    static openAnimTime = 1750;
    static idleSpeed = 1;

    static maxWidth = 250;
    static minWidth = 150;
    static maxHeight = 150;
    static minHeight = 100;

    static opacity = 0.9;

    static speedLayerDiff = 0.1;
    static sizeLayerDiff = 0.075;
    static opacityLayerDiff = 0.2;

    constructor(props) {
        super(props);

        this.layer = this.props.layer;

        let width = (Math.random()*(Cloud.maxWidth - Cloud.minWidth) + Cloud.minWidth)*(1 - this.layer*Cloud.sizeLayerDiff);
        let height = (Math.random()*(Cloud.maxHeight - Cloud.minHeight) + Cloud.minHeight)*(1 - this.layer*Cloud.sizeLayerDiff);

        let opacity = Cloud.opacity*(1 - Cloud.opacityLayerDiff*this.layer)

        let x = this.props.x
        let y = this.props.y

        this.state = {
            drag: false,
            offsets: {
                widthOffset: 0,
                heightOffset: 0,
                opacityOffset: 0,
                xIdleAnimOffset: 0,
                yIdleAnimOffset: 0,
                yOpenAnimOffset: Cloud.initialYOffset
            },
            style: {
                width,
                height,
                x,
                y,
                opacity
            }
        }
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props !== prevProps) {
    //         let trueWidthPercent = (this.props.width + this.state.offsets.widthOffset)/window.innerWidth
    //         let trueHeightpercent = (this.props.height + this.state.offsets.heightOffset)/window.innerHeight

    //         let x = this.props.x-.5*trueWidthPercent*100
    //         let y = this.props.y-.5*trueHeightpercent*100

    //         let newState = _.cloneDeep(this.state);
            
    //         newState.style.left = x;
    //         newState.style.bottom = y;
    //         this.setState(
    //             newState
    //         )
    //     }
    // }

    mouseEnter = e => {
        clearInterval(this.shrinkInterval);
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
        }, 1);
    }

    mouseLeave = e => {
        clearInterval(this.growInterval);
        this.shrinkInterval = setInterval(() => {
            let newState = _.cloneDeep(this.state);

            if (newState.offsets.opacityOffset <= 0) {
                clearInterval(this.shrinkInterval)
                return
            }

            newState.offsets.widthOffset -= 0.1;
            newState.offsets.heightOffset -= 0.1;
            newState.offsets.opacityOffset -= 0.01;

            this.setState(newState);
        }, 1);
    }

    openAnimation = () => {
        let timePercent = (Date.now() - this.startAnimDate.getTime())/Cloud.openAnimTime

        // Linear version
        // let yNewAnimOffset = (Clouds.initialYOffset)*(1 - timePercent);

        let yNewOpenAnimOffset = ((timePercent - 1)**2)*Cloud.initialYOffset;

        let newState = _.cloneDeep(this.state);

        newState.offsets.yOpenAnimOffset = yNewOpenAnimOffset*(1 - this.layer*Cloud.speedLayerDiff)
        
        this.setState(newState);
    }

    idleAnimation = () => {

        let xIncrement = Cloud.idleSpeed*(1 - this.layer*Cloud.speedLayerDiff)*0.01;

        let xNew = this.state.style.x + xIncrement;

        let width = this.state.style.width + this.state.offsets.widthOffset;

        if (xNew > 100 + 100*width/(2*window.innerWidth)) {
            xNew = -100*width/(2*window.innerWidth);
        }

        let newState = _.cloneDeep(this.state);

        newState.style.x = xNew;
        
        this.setState(newState);
    }

    componentDidMount() {
        setTimeout(() => {
            this.startAnimDate = new Date();
            this.openAnimInterval = setInterval(this.openAnimation, 1);
            setTimeout(() => {clearInterval(this.openAnimInterval);}, Cloud.openAnimTime);
        }, Cloud.appearTime)
        this.idleAnimInterval = setInterval(this.idleAnimation, 1);
    }

    componentWillUnmount() {
        clearInterval(this.growInterval)
        clearInterval(this.shrinkInterval)
        clearInterval(this.openAnimInterval);
        clearInterval(this.idleAnimInterval);
    }

    onClick = e => {
        // let style = {}

        // style.width = (this.state.style.width + this.state.offsets.widthOffset) + 'px';
        // style.height = this.state.style.height + this.state.offsets.heightOffset;
        // style.left = (this.state.style.x + this.state.offsets.yIdleAnimOffset + this.state.offsets.yOpenAnimOffset) + 'vw';
        // style.bottom = (this.state.style.y + this.state.offsets.xIdleAnimOffset) + 'vh';
        // style.opacity = (this.state.style.opacity + this.state.offsets.opacityOffset).toString();

        // console.log(this.state.style.y, + (100 - 100*e.clientY/window.innerHeight), 100*(style.height/(2*window.innerHeight)));
        // console.log(this.state.style.x, + (100*e.clientX/window.innerWidth));
    }

    scroll = e => {
        console.log(e);
    }

    render() {
        let style = {}

        let width = this.state.style.width + this.state.offsets.widthOffset
        style.width = width + 'px';

        let height = this.state.style.height + this.state.offsets.heightOffset
        style.height = height + 'px';
        
        let xCorrection = -100*(width/(2*window.innerWidth));
        style.left = (this.state.style.x + xCorrection) + 'vw';

        let yCorrection = -100*(height/(2*window.innerHeight));
        style.bottom = (this.state.style.y  + this.state.offsets.yOpenAnimOffset + yCorrection) + 'vh';
        style.opacity = (this.state.style.opacity + this.state.offsets.opacityOffset).toString();

        return (
            <div 
                onMouseEnter={this.mouseEnter} 
                onMouseLeave={this.mouseLeave}
                onScroll={this.scroll}
                className="cloud" 
                style={style} 
                onClick={this.onClick}
            />
        )
    }
}
