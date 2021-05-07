import React, { Component } from 'react'
import _ from 'lodash'

const hoverAnimSpeed = 1;

const initialYOffset = -200;
const appearTime = 250;
const openAnimTime = 1750;
const idleSpeed = 1;
const scrollMult = 50;

const maxWidth = 250;
const minWidth = 150;
const maxHeight = 150;
const minHeight = 100;

const baseOpacity = 0.9;

const speedLayerDiff = 0.1;
const sizeLayerDiff = 0.075;
const opacityLayerDiff = 0.2;
const scrollLayerDiff = 0.2;

export default class Cloud extends Component {
    constructor(props) {
        super(props);

        this.layer = this.props.layer;

        let width = (Math.random()*(maxWidth - minWidth) + minWidth)*(1 - this.layer*sizeLayerDiff);
        let height = (Math.random()*(maxHeight - minHeight) + minHeight)*(1 - this.layer*sizeLayerDiff);

        let opacity = baseOpacity*(1 - opacityLayerDiff*this.layer)

        let x = this.props.x
        let y = this.props.y

        this.state = {
            drag: false,
            offsets: {
                widthOffset: 0,
                heightOffset: 0,
                opacityOffset: 0,
                yScrollOffset: 0,
                yOpenAnimOffset: initialYOffset
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
            if (this.state.style.opacity + this.state.offsets.opacityOffset >= 1) {
                clearInterval(this.growInterval)
                return;
            }

            this.setState((prevState, props) => {
                let newState = _.cloneDeep(prevState);

                newState.offsets.widthOffset = prevState.offsets.widthOffset + 0.1*hoverAnimSpeed;
                newState.offsets.heightOffset = prevState.offsets.heightOffset + 0.1*hoverAnimSpeed;
                newState.offsets.opacityOffset = prevState.offsets.opacityOffset + 0.01*hoverAnimSpeed;

                return newState;
            });
        }, 1);
    }

    mouseLeave = e => {
        clearInterval(this.growInterval);
        this.shrinkInterval = setInterval(() => {
            if (this.state.offsets.opacityOffset <= 0) {
                clearInterval(this.shrinkInterval)
                return
            }

            this.setState((prevState, props) => {
                let newState = _.cloneDeep(prevState);

                newState.offsets.widthOffset = prevState.offsets.widthOffset - 0.1*hoverAnimSpeed;
                newState.offsets.heightOffset = prevState.offsets.heightOffset - 0.1*hoverAnimSpeed;
                newState.offsets.opacityOffset = prevState.offsets.opacityOffset - 0.01*hoverAnimSpeed;

                return newState;
            });
        }, 1);
    }

    openAnimation = () => {
        let timePercent = (Date.now() - this.startAnimDate.getTime())/openAnimTime
        
        this.setState((prevState, props) => {
            // Linear version
            // let yNewAnimOffset = (Clouds.initialYOffset)*(1 - timePercent);

            let yNewOpenAnimOffset = ((timePercent - 1)**2)*initialYOffset;

            let newState = _.cloneDeep(prevState);

            newState.offsets.yOpenAnimOffset = yNewOpenAnimOffset*(1 - this.layer*speedLayerDiff);

            return newState;
        });
    }

    idleAnimation = () => {
        let xIncrement = idleSpeed*(1 - this.layer*speedLayerDiff)*0.01;
        let scrollPercent = (window.pageYOffset/(window.document.body.clientHeight - window.innerHeight))
        
        this.setState((prevState, props) => {
            let xNew = prevState.style.x + xIncrement;
            let yOffset = (scrollPercent-0.5)*scrollMult*(1-scrollLayerDiff*props.layer)

            let width = prevState.style.width + prevState.offsets.widthOffset;

            if (xNew > 100 + 100*width/(2*window.innerWidth)) {
                xNew = -100*width/(2*window.innerWidth);
            }

            let newState = _.cloneDeep(prevState);

            newState.style.x = xNew;
            newState.offsets.yScrollOffset = yOffset;

            return newState;
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.startAnimDate = new Date();
            this.openAnimInterval = setInterval(this.openAnimation, 1);
            setTimeout(() => {clearInterval(this.openAnimInterval);}, openAnimTime);
        }, appearTime)
        this.idleAnimInterval = setInterval(this.idleAnimation, 1);
    }

    componentWillUnmount() {
        clearInterval(this.growInterval)
        clearInterval(this.shrinkInterval)
        clearInterval(this.openAnimInterval);
        clearInterval(this.idleAnimInterval);
    }

    onClick = e => {
        console.log('offset', this.state.offsets.yScrollOffset)
        console.log((window.pageYOffset/(window.document.body.clientHeight - window.innerHeight)))
    }

    scroll = e => {
        console.log(e);
    }

    getStyle = () => {
        let style = {}

        let width = this.state.style.width + this.state.offsets.widthOffset
        style.width = width + 'px';

        let height = this.state.style.height + this.state.offsets.heightOffset
        style.height = height + 'px';
        
        let xCorrection = -100*(width/(2*window.innerWidth));
        style.left = (this.state.style.x + xCorrection) + 'vw';

        let yCorrection = -100*(height/(2*window.innerHeight));
        style.bottom = (this.state.style.y  + this.state.offsets.yOpenAnimOffset + this.state.offsets.yScrollOffset + yCorrection) + 'vh';
        style.opacity = (this.state.style.opacity + this.state.offsets.opacityOffset).toString();

        return style;
    }

    render() {
        let style = this.getStyle();

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
