import React, { Component } from 'react'

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
        return (
            <header>
                <a id="nameLink" href="#about">
                    <span className="highlight">Benedict</span> Taguinod
                </a>
                
                <div id="pageLinks">
                    { this.state.linkInfo.map((info, index) => 
                        <a className="pageLink" href={info.href} key={index}>
                            {info.content}
                        </a>
                    )}
                </div>
            </header>
        )
    }
}
