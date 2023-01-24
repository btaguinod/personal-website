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
import faunadb from 'faunadb';

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

window.onload = async () => {
  const q = faunadb.query;
  const client = new faunadb.Client({
    secret: process.env.REACT_APP_DB_KEY,
  });
  const dbdocument = await client.query(
    q.Get(q.Match(q.Index('logs')))
  );
  const d = new Date();
  let time = d.toTimeString();
  await client.query(
    q.Update(dbdocument.ref, {
      data: {
        hits: dbdocument.data.hits + 1,
        times: [time].concat(dbdocument.data.times)
      },
    })
  );
}