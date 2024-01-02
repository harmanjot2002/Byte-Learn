import React from 'react';
import './CourseCardsStyles.css';
import {Link} from 'react-router-dom';

const CourseCards = () => {
  return (
    <>
      <header>
        <h1><span className="recorded">Recorded</span> <span className="courses">Courses</span></h1>
      </header>

      <div className="containers">
        <div className="course">
          <img src="https://miro.medium.com/v2/resize:fit:1200/1*-EFdnPuVrwUOmYte11v0OA.png" alt="Course 1 Image" />
          <div className="course-info">
            <h2 className="course-title">Data Structure & Algorithms BootCamp @Supreme Batch</h2>
            <p className="course-description"></p>
            <div className="price-containers">
              <p className="course-off">3500</p>
              <p className="course-cut-price">7000</p>
              <p className="course-price">50% off</p>
            </div>
          </div>
        </div>

      <Link to="/webdev">
      <div className="course">
          <img src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="Course 2 Image" />
          <div className="course-info">
            <h2 className="course-title">Web Development Master Course @dot Batch</h2>
            <p className="course-description"></p>
            <div className="price-containers">
              <p className="course-off">4500</p>
              <p className="course-cut-price">6999</p>
              <p className="course-price">42% off</p>
            </div>
          </div>
        </div>
      </Link>
       
      </div>
    </>
  );
};

export default CourseCards;
