import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div className="page" id="about">
            <div className="page-text">
                <div className="title">Hi, I'm <span className="highlight"> Benedict </span></div>
                <div className="subtext-2">I'm an EECS student at <span className="highlight"> UC Berkeley </span> and a software developer at <span className="highlight"> Placesoft </span></div>
                <div className="subtext-1">Check out my work below!</div>
            </div>
            <a id="arrow" href="#projects" className="icon"><FontAwesomeIcon icon={faArrowCircleDown} /></a>
        </div>
    )
}
