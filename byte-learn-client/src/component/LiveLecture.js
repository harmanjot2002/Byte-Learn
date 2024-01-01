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
              <img src="https://dgyugonj9a9mu.cloudfront.net/supreme_1_codehelp_5114b9ebd5.jpg" alt="Course 1 Image" />
              <div className="course-info" style={{display:"flex",justifyContent:"center",alignItems:"center",color:"red",fontWeight:"bolder"}}>
                 <span>GO LIVE</span>
              </div>
            </div>
    
          <Link to="/webdev">
          <div className="course">
              <img src="https://codehelp.s3.ap-south-1.amazonaws.com/Web_Dev_670f900667.jpg" alt="Course 2 Image" />
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

