import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header.js';
import SideLinks from './SideLinks/SideLinks';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Courses from './Pages/Courses/Courses';

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