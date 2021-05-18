import React, { Component } from 'react';
import './menuButton.css';

export default class MenuButton extends Component {
    render() {

        return (
            <div id="menu-button" >
                <input type="checkbox" />
                {this.props.children}
                <span />
                <span />
                <span />
                <span />
                <span />   
            </div>
        )
    }
}
