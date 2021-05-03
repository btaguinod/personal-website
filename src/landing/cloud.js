import React, { Component } from 'react'

export default class Cloud extends Component {
    static initial
    constructor(props) {
        super(props);
        this.state = {
            style: {
                width: this.props.width+'px',
                height: this.props.height+'px',
                left: this.props.x+'vw',
                top: this.props.y+'vh',
                position: 'relative',
                backgroundColor: 'white', 
                boxShadow: '5px 5px 20px'
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
