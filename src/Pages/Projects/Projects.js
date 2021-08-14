import React from 'react';
import ProjectCards from './ProjectCards';
import './Projects.css';

export default function Projects() {
    return (
        <div className="page" id="projects">
            <div id="projects-title"> <div className="title">Personal <a href="https://github.com/btaguinod" className="highlight"> Projects </a> </div>
            </div>
            <ProjectCards />
        </div>
    )
}
