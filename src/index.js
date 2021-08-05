import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import SideLinks from './SideLinks';
import About from './About';
import Projects from './Projects';
import Courses from './Courses';

let vh = window.innerHeight*0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`)

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
