import React, { Component } from 'react';
import MenuButton from './MenuButton/MenuButton';
import SideLinks from '../SideLinks/SideLinks';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            linkInfo: [
                {
                    content: 'About',
                    href: '#about'
                },
                {
                    content: 'Projects',
                    href: '#projects'
                },
                {
                    content: 'Courses',
                    href: '#courses'
                }
            ]
        };
    }

    render() {
        let links =
         this.state.linkInfo.map((info, index) => 
            <a className="page-link" href={info.href} key={index}>
                {info.content}
            </a>
        );
        return (
            <header>
                <a id="name-link" href="#about">
                    <span className="highlight">Benedict</span> Taguinod
                </a>
                <MenuButton children={<div className="page-links" id="dropdown-links">{links}<SideLinks /></div>} />
                <div className="page-links" id="main-links">{links}</div>
                
                
            </header>
        )
    }
}
