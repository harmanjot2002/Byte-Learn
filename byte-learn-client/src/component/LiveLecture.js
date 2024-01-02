import React from 'react'
import './CourseCardsStyles.css';
import {Link} from 'react-router-dom';

const LiveLecture = () => {
    return (
        <>
          <header>
            <h1><span className="recorded" style={{color:"Red"}}>Live </span> <span className="courses" style={{color:"Red"}}>Lectures</span></h1>
          </header>
    
          <div className="containers">
            <div className="course">
              <img src="https://miro.medium.com/v2/resize:fit:1200/1*-EFdnPuVrwUOmYte11v0OA.png" alt="Course 1 Image" />
              <div className="course-info" style={{display:"flex",justifyContent:"center",alignItems:"center",color:"red",fontWeight:"bolder"}}>
                 <span>GO LIVE</span>
              </div>
            </div>
    
          <Link to="/att" >
          <div className="course">
              <img src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" alt="Course 2 Image" />
              <div className="course-info" style={{display:"flex",justifyContent:"center",alignItems:"center",color:"red",fontWeight:"bolder"}}>
                 <span>GO LIVE</span>
              </div>
            </div>
          </Link>
           
          </div>
        </>
      );
}

export default LiveLecture

