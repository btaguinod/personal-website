import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './landing/landing';
import Cloud from './landing/cloud';
import './index.css';

ReactDOM.render(
  <div>
    <Landing />
    <Cloud x="10" y="10" width="100" height="100" />
  </div>,
  document.getElementById('root')
);
