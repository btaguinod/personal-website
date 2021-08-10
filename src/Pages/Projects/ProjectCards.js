import React from 'react';
import ProjectCard from './ProjectCard';

const cards = [
    {
        title: 'Purple Politics',
        desc: 'A news website that provides various perspectives on political events',
        stack: ['Flask REST API', 'React', 'Python NLP', 'MongoDB', 'IBM Watson NLU API'],
        url: 'https://purplepolitics.netlify.app',
        codeUrl: 'https://github.com/btaguinod/purple-politics',
        imageLocation: process.env.PUBLIC_URL + '/img/purplepolitics.png'
    },
    {
        title: 'Personal Website',
        desc: 'A software developer portfolio that details who I am, my projects, and my university courses.',
        stack: ['React', 'CSS'],
        url: 'https://btaguinod.netlify.app',
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
