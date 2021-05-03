import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './landing/landing';
import Cloud from './landing/cloud';
import './index.css';

ReactDOM.render(
  <div>
    <Landing />
    <Cloud  />
  </div>,
  document.getElementById('root')
);
