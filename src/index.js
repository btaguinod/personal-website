import React from 'react';
import ReactDOM from 'react-dom';
import About from './about/about';
import Projects from './projects/projects';
import Courses from './courses/courses';
import './index.css';
import Background from './background/background';
import Landing from './landing/landing';

ReactDOM.render(
  <React.StrictMode>
    <Background>
      {/* <Landing />
      <About />
      <Projects />
      <Courses /> */}
    </ Background>
  </ React.StrictMode>,
  document.getElementById('root')
);
