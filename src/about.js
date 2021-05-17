import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div className="page">
            <div id="about-text">
                <div className="title">Hi, I'm <span class="highlight"> Benedict </span></div>
                <div className="subtext-2">I'm an EECS student at <span class="highlight"> UC Berkeley </span> and a software developer at <span class="highlight"> Placesoft </span></div>
                <div className="subtext-1">Check out my work below!</div>
            </div>
            <a id="arrow" href="#projects" className="icon"><FontAwesomeIcon icon={faArrowCircleDown} /></a>
        </div>
    )
}
