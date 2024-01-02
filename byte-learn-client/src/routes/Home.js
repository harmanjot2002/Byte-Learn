import React from 'react'
import Navbar from "../component/Navbar";
import Why from '../component/Why';
import MainHome from '../component/MainHome'
import Atom from '../component/Atom';
import Reviews from '../component/MeetInstructors'
import Footer from '../component/Footer';
import FacingIssue from '../component/FacingIssue';

const Home = ({loggedInUser}) => {
  return (
    <>
      
      <Navbar loggedInUser={loggedInUser}/>
      <FacingIssue/>
      <MainHome/>
      <Why/>
      <Reviews/>
      <Atom/>
      <Footer/>
    </>
  )
}

export default Home
