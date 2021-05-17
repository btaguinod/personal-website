import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import SideLinks from './sideLinks';
import About from './about';
import Projects from './projects';
import Courses from './courses';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SideLinks />
    <About />
    <Projects />
    <Courses />
    <div id="bar"/>
  </ React.StrictMode>,
  document.getElementById('root')
);
