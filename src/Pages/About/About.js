import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import './About.css';

export default function About() {
    return (
        <div className="page" id="about">
            <div className="page-text" id="about-text">
                <div className="title">Hi, I'm <a href="https://www.linkedin.com/in/benedict-taguinod/" className="highlight"> Benedict </a></div>
                <div className="subtext-2">I'm an EECS student at <span className="highlight"><a href="https://www.linkedin.com/school/uc-berkeley/"> UC Berkeley</a></span> and a former software developer at <span className="highlight"><a href="https://www.linkedin.com/company/placesoft/about/"> Placesoft </a></span></div>
                <div className="subtext-1">Check out my work below!</div>
            </div>
            <a id="arrow" href="#projects" className="icon"><FontAwesomeIcon icon={faArrowCircleDown} /></a>
        </div>
    )
}
