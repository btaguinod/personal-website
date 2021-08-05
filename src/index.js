import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header.js';
import SideLinks from './SideLinks/SideLinks';
import About from './About/About';
import Projects from './Projects/Projects';
import Courses from './Courses/Courses';

const setHeight = () => {
  let vh = window.innerHeight*0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('resize', setHeight);
setHeight();

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