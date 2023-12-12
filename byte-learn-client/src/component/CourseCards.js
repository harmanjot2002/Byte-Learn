// CourseCards.js
import React from 'react';
import './CourseCardsStyles.css';

const CourseCards = () => {
  return (
    <>
      <header>
        <h1><span className="recorded">Recorded</span> <span className="courses">Courses</span></h1>
      </header>

      <div className="container">
        <div className="course">
          <img src="https://dgyugonj9a9mu.cloudfront.net/supreme_1_codehelp_5114b9ebd5.jpg" alt="Course 1 Image" />
          <div className="course-info">
            <h2 className="course-title">Data Structure & Algorithms BootCamp @Supreme Batch</h2>
            <p className="course-description"></p>
            <div className="price-container">
              <p className="course-off">3500</p>
              <p className="course-cut-price">7000</p>
              <p className="course-price">50% off</p>
            </div>
          </div>
        </div>

        <div className="course">
          <img src="https://codehelp.s3.ap-south-1.amazonaws.com/Web_Dev_670f900667.jpg" alt="Course 2 Image" />
          <div className="course-info">
            <h2 className="course-title">Web Development Master Course @dot Batch</h2>
            <p className="course-description"></p>
            <div className="price-container">
              <p className="course-off">4500</p>
              <p className="course-cut-price">6999</p>
              <p className="course-price">42% off</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCards;
