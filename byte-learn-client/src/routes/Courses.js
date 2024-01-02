import React from 'react'
import Navbar from "../component/Navbar";
import CourseCards from '../component/CourseCards';
import Footer from '../component/Footer';

const Courses = ({loggedInUser}) => {
  return (
    <div>
      <Navbar loggedInUser={loggedInUser}/>
      <CourseCards/>
      <Footer/>
    </div>
  )
}

export default Courses
