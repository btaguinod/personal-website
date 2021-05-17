import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'


export default function SideLinks() {
    return (
        <div id="sideLinks">
            <a href="#about" className="icon"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="#about" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#about" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#about" className="icon"><FontAwesomeIcon icon={faFileAlt} /></a>
        </div>
    )
}
