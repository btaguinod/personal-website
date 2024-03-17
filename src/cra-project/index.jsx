import './index.css';
import Header from './Header/Header'
import SideLinks from './SideLinks/SideLinks'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects';
import Courses from './Pages/Courses/Courses';
// TODO: activeate page watch
// import faunadb from 'faunadb';

export function MainPage() {
  return (
    <div id="mainpage">
      <Header />
      <SideLinks />
      <About />
      <Projects />
      <Courses />
      <div id="bar" />
    </div>
  );
}

// window.onload = async () => {
//   const q = faunadb.query;
//   const client = new faunadb.Client({
//     secret: process.env.REACT_APP_DB_KEY,
//   });
//   const dbdocument = await client.query(
//     q.Get(q.Match(q.Index('logs')))
//   );
//   const d = new Date();
//   let time = d.toTimeString();
//   await client.query(
//     q.Update(dbdocument.ref, {
//       data: {
//         hits: dbdocument.data.hits + 1,
//         times: [time].concat(dbdocument.data.times)
//       },
//     })
//   );
// }