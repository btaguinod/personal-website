import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import SideLinks from './sideLinks';
import About from './about';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SideLinks />
    <About />
    <div id="bar"/>
  </ React.StrictMode>,
  document.getElementById('root')
);
