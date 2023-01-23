import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './Header/Header.js';
import SideLinks from './SideLinks/SideLinks';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Courses from './Pages/Courses/Courses';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Models from './Pages/Subpages/Models/Models';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/models' element={<Models />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function MainPage() {
  return (
    <div id="mainpage">
      <Header />
      <SideLinks />
      <About />
      <Projects />
      <Courses />
      <div id="bar"/>
    </div>
  );
}