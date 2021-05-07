import React, { Component } from 'react'
import './landing.css'

export default class Landing extends Component {
    render() {
        return (
            <div id="landing">
                <div className="grid">
                    <a href="#about">
                        <div className="cell">
                            About
                        </div>
                    </a>
                    <a href="#projects">
                        <div className="cell">
                            Projects
                        </div>
                    </a>
                    <a href="#courses">
                        <div className="cell">
                            Courses
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
