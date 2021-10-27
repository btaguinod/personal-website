import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function ProjectCard(props) {

    let image;
    if (props.card.imageLocation) {
        image = (
            <a href={props.card.url} className="project-card-image">
                <img src={props.card.imageLocation} alt="project" />
                <div className="project-card-image-overlay" />
            </a>
        );
    }

    return (
        <div className={"project-card" + (!props.card.imageLocation ? "no-image": "")}>
            {image}
            <div className="project-card-text">
                <a href={props.card.url} className="project-card-title highlight">
                        {props.card.title}
                </a>
                <div className="project-card-desc">{props.card.desc}</div>
                <div className="project-card-stack">
                    {props.card.stack.join(', ')}
                </div>
                <div className="project-card-icons">
                    <a href={props.card.codeUrl} className="project-card-icon">
                        <FontAwesomeIcon icon={faCode} />
                    </a>
                    <a href={props.card.url} className="project-card-icon" >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </div>
            </div>
        </div>
    )
}
