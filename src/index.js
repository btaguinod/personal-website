import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './landing/landing';
import About from './about/about';
import Projects from './projects/projects';
import Courses from './courses/courses';
import './index.css';

ReactDOM.render(
  <div>
    <Landing />
    <About />
    <Projects />
    <Courses />
  </div>,
  document.getElementById('root')
);
