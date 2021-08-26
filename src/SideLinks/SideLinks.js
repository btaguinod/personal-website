import React from 'react';
import './SideLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';


export default function SideLinks() {
    return (
        <div className="side-links">
            <a href="mailto:webmaster@example.com" className="icon"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://github.com/btaguinod" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/benedict-taguinod/" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href={process.env.PUBLIC_URL + 'resume.pdf'} className="icon"><FontAwesomeIcon icon={faFileAlt} /></a>
        </div>
    )
}
