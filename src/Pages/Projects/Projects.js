import React from 'react';
import ProjectCards from './ProjectCards';
import './Projects.css';

export default function Projects() {
    return (
        <div className="page" id="projects">
            <a id="projects-title" href="https://github.com/btaguinod"> <div className="title">Personal <span className="highlight"> Projects </span> </div>
            </a>
            <ProjectCards />
        </div>
    )
}
