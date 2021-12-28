import React from 'react';
import CourseCard from './CourseCard';

export default function CourseCards() {
    return (
        <div id="course-cards">
            {cards.map(card => <CourseCard key={card.title} card={card} />)}
        </div>
    );
};

const cards = [
    {
        title: 'CS 61C',
        name: 'Machine Structures',
        skills: ['C', 'RISC-V', 'Computer Architecture'],
        projects: [
            ['Philphix', 'https://cs61c.org/fa21/projects/proj1/'], 
            ['CS61Classify', 'https://cs61c.org/fa21/projects/proj2/'], 
            ['Numc', 'https://cs61c.org/fa21/projects/proj4/']
        ],
        url: 'https://cs61c.org/fa21/',
        school: 'UC Berkeley',
        time: 'Fall 2021'
    },
    {
        title: 'CS 61B',
        name: 'Data Structures',
        skills: ['Java', 'Data Structures', 'OOP', 'Algorithms'],
        projects: [
            ['BYOW', 'https://fa20.datastructur.es/materials/proj/proj3/proj3/']
        ],
        url: 'https://fa20.datastructur.es/',
        school: 'UC Berkeley',
        time: 'Fall 2020'
    },
    {
        title: 'CS 61A',
        name: 'Structure and Interpretation of Computer Programs',
        skills: ['Python', 'SQL'],
        projects: [
            ['Scheme Interpreter', 'https://inst.eecs.berkeley.edu/~cs61a/su20/proj/scheme_stubbed/'],
            ['Ants Vs. SomeBees', 'https://inst.eecs.berkeley.edu/~cs61a/su20/proj/ants/']
        ],
        url: 'https://inst.eecs.berkeley.edu/~cs61a/su20/',
        school: 'UC Berkeley',
        time: 'Summer 2020'
    },
    {
        title: 'CS 198 073',
        name: 'Cloud Computing and SaaS',
        skills: ['Go', 'SQL', 'Docker', 'AWS EC2 Server'],
        projects: [
            ['BearCloud', '']
        ],
        url: 'https://calcloud.org/',
        school: 'UC Berkeley',
        time: 'Fall 2020'
    },
    {
        title: 'EECS 16A',
        name: 'Designing Information Devices and Systems I',
        skills: ['Python', 'NumPy'],
        projects: [
            ['Touch Screen', '']
        ],
        url: 'https://inst.eecs.berkeley.edu/~ee16a/fa20/',
        school: 'UC Berkeley',
        time: 'Fall 2020'
    },
    {
        title: 'EECS 16B',
        name: 'Designing Information Devices and Systems II',
        skills: ['Python', 'NumPy'],
        projects: [
            ['Voice-Controlled Car', '']
        ],
        url: 'https://eecs16b.org/',
        school: 'UC Berkeley',
        time: 'Spring 2021'
    },
    
    {
        title: 'COMSC 200',
        name: 'Object Oriented Programming C++',
        skills: ['C++', 'OOP'],
        projects: [],
        url: '',
        school: 'Diablo Valley College',
        time: 'Spring 2020'
    },
    {
        title: 'COMSC 210',
        name: 'Program Design and Data Structures',
        skills: ['C++', 'Data Structures', 'Algorithms'],
        projects: [],
        url: '',
        school: 'Diablo Valley College',
        time: 'Spring 2020'
    },
    {
        title: 'COMSC 165',
        name: 'Advanced Programming with C & C++',
        skills: ['C++'],
        projects: [],
        url: '',
        school: 'Diablo Valley College',
        time: 'Fall 2019'
    },
    {
        title: 'COMSC 110',
        name: 'Introduction to Programming',
        skills: ['C++'],
        projects: [],
        url: '',
        school: 'Diablo Valley College',
        time: 'Spring 2019'
    },
];
