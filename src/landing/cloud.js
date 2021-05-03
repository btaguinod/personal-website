import React, { Component } from 'react'

export default class cloud extends Component {
    static initial
    constructor(props) {
        super(props);
        this.state = {
            style: {
                width: this.props.width,
                height: this.props.height,
                right: this.props.x,
                top: this.props.y,
            }
        }
    }

    setY = (newY) => {

    }

    render() {
        return (
            <div style={this.state.style}>
                
            </div>
        )
    }
}
