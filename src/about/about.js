import React, { Component } from 'react'
import Card from '../card'
import './about.css'

export default class About extends Component {

    render() {
        return (
            <div id='about'>
                <Card 
                    key={0} 
                    layer={0}
                    x={50} 
                    y={50} 
                    text="About"
                />
            </div>
        )
    }
}
