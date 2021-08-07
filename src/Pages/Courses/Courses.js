import React from 'react';
import './Courses.css';
import CourseCards from './CourseCards';

export default function Courses() {
    return (
        <div className="page" id="courses">
            <div id="courses-title">
                <div className="title"> University <span className="highlight"> Courses </span></div>
            </div>
            <CourseCards />
        </div>
    );
};
