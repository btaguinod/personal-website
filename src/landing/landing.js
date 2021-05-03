import React, { Component } from 'react'
import Cloud from './cloud';
import './landing.css'

export default class Landing extends Component {
    render() {
        return (
            <div id="landing">
                <Cloud x="10" y="10" width="100" height="100" />
            </div>
        )
    }
}
