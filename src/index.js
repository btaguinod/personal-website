import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import SideLinks from './sideLinks';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SideLinks />
  </ React.StrictMode>,
  document.getElementById('root')
);
