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

        let x = this.props.x
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

        style.left = this.state.x + 'vw';
        style.top = this.state.y + 'vh';
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
