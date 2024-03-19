import { Component } from 'react';
import './MenuButton.css';

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
