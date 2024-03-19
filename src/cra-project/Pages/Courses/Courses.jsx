import CourseCards from './CourseCards';
import './Courses.css';

export default function Courses() {
    return (
        <div className="page" id="courses">
            <div id="courses-title">
                <div className="title"> University <a href="#courses" className="highlight"> Courses </a></div>
            </div>
            <CourseCards />
        </div>
    );
};
