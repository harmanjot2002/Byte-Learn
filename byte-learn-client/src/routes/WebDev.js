import React from 'react'
import Navbar from "../component/Navbar";
import HomePage from "../component/courses/HomePage";
import NavigationBar from '../component/courses/NavigationBar';
import Overview from "../component/courses/Overview";
import CourseContent from "../component/courses/CourseContent";
import Instructors from "../component/courses/Instructors";
import FAQs from "../component/courses/FAQs";
import Footer from '../component/Footer';

const WebDev = ({loggedInUser}) => {
  return (
    <>
      <Navbar loggedInUser={loggedInUser}/>
      <HomePage/>
      <NavigationBar/>
      <Overview/>
      <CourseContent/>
      <Instructors/>
      <FAQs/>
      <Footer/>
    </>
  )
}

export default WebDev
