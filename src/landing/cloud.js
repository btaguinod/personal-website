import React, { Component } from 'react'

export default class Cloud extends Component {
    constructor(props) {
        super(props);
        let x = this.props.x-.5*this.props.width/window.innerWidth*100
        let y = this.props.y-.5*this.props.height/window.innerHeight*100
        this.state = {
            style: {
                width: this.props.width+'px',
                height: this.props.height+'px',
                left: x +'vw',
                bottom: y+'vh',
                opacity: this.props.opacity.toString()
            }
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            let x = this.props.x-.5*this.props.width/window.innerWidth*100
            let y = this.props.y-.5*this.props.height/window.innerHeight*100
            
            this.setState({
                style: {
                    width: this.props.width+'px',
                    height: this.props.height+'px',
                    left: x+'vw',
                    bottom: y+'vh',
                    opacity: this.props.opacity.toString()
                }
            })
        }
    }
    render() {
        return (
            <div className="cloud" style={this.state.style}>
                
            </div>
        )
    }
}
