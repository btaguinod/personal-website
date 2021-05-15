import React, { Component } from 'react'

const maxWidth = 250;
const minWidth = 150;
const maxHeight = 150;
const minHeight = 100;

export default class Cloud extends Component {
    constructor(props) {
        super(props);

        let width = (Math.random()*(maxWidth - minWidth) + minWidth);
        let height = (Math.random()*(maxHeight - minHeight) + minHeight);

        let x = this.props.x * -30 *0.01;
        let y = this.props.y

        this.state = {
            x,
            y,
            width,
            height,
        }
    }

    getStyle = () => {
        let style = {};

        // let xAdjustment = -100*this.state.width/(2*window.innerWidth)
        // style.left = (this.state.x + xAdjustment) + 'vw';

        style.animationDelay = this.state.x + 's';

        let yAdjustment = -100*this.state.height/(2*window.innerHeight);
        style.bottom = (this.state.y + yAdjustment) + 'vh';

        style.width = this.state.width + 'px';
        style.height = this.state.height + 'px';

        return style;
    }

    render() {
        let style = this.getStyle();

        return (
            <div 
                className="cloud" 
                style={style} 
            />
        )
    }
}
