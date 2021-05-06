import React from 'react';
import ReactDOM from 'react-dom';
import About from './about/about';
import Projects from './projects/projects';
import Courses from './courses/courses';
import './index.css';
import BackgroundContainer from './background/background';

ReactDOM.render(
  <React.StrictMode>
    <BackgroundContainer>
      <About />
      <Projects />
      <Courses />
    </ BackgroundContainer>
  </ React.StrictMode>,
  document.getElementById('root')
);
