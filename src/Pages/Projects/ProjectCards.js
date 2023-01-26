import React from 'react';
import ProjectCard from './ProjectCard';

const cards = [
    {
        title: 'Gosper Shells',
        desc: '3D structures with patterns that resemble a Gosper Curve',
        stack: ['3D Modeling'],
        url: './gosper-shells',
        codeUrl: 'https://github.com/btaguinod/gosper-shell-generator',
        imageLocation: ''
    },
    {
        title: 'LiBearium',
        desc: 'Provides an easy way to look for nearby libraries and how popular the libraries are at that time (CalHacks 8.0 Project)',
        stack: ['React', 'CSS'],
        url: 'https://libearium.tech/',
        codeUrl: 'https://github.com/shreystechtips/SmartQueue',
        imageLocation: process.env.PUBLIC_URL + '/img/libearium.jpg'
    },
    {
        title: 'Purple Politics',
        desc: 'A news website that provides various perspectives on political events',
        stack: ['Flask REST API', 'React', 'Python NLP', 'MongoDB', 'IBM Watson NLU API', 'Algolia API'],
        url: 'https://purplepoliticsevents.com',
        codeUrl: 'https://github.com/btaguinod/purple-politics',
        imageLocation: process.env.PUBLIC_URL + '/img/purplepolitics.png'
    },
    {
        title: 'Personal Website',
        desc: 'A software developer portfolio that details who I am, my projects, and my university courses',
        stack: ['React', 'CSS'],
        url: 'https://benedict-taguinod.com',
        codeUrl: 'https://github.com/btaguinod/personal-website',
        imageLocation: ''
    }
];

export default function ProjectCards() {
    return (
        <div id="project-cards">
            {cards.map(card => 
                <ProjectCard
                    key={card.title}
                    card={card}
                />
            )}
        </div>
    );
};
