import _ from 'lodash';
import React, { Component } from 'react'
import Cloud from './background/cloud'

export default class Card extends Cloud {
    constructor(props) {
        super(props);
        this.state.style.opacity = 1;
    }

    idleAnimation = () => {
        return;
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
            > {this.props.text} </div>
        )
    }
}
