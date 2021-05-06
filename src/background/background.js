import React, { Component } from 'react'
import Clouds from './clouds';
import './background.css'

export default class Background extends Component {
    click = e => {
        console.log(this.props)
    }

    render() {
        return (
            <div id="background" onClick={this.click}>
                <Clouds />
                {this.props.children}
            </div>
        )
    }
}
