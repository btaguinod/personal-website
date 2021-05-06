import React from 'react';
import ReactDOM from 'react-dom';
import About from './about/about';
import Projects from './projects/projects';
import Courses from './courses/courses';
import './index.css';
import Background from './background/background';

ReactDOM.render(
  <React.StrictMode>
    <Background>
      <About />
      <About />
    </ Background>
  </ React.StrictMode>,
  document.getElementById('root')
);
