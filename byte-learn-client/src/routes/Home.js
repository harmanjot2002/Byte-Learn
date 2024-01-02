import React from 'react'
import Navbar from "../component/Navbar";
import Why from '../component/Why';
import MainHome from '../component/MainHome'
import Atom from '../component/Atom';
import Reviews from '../component/MeetInstructors'
import Footer from '../component/Footer';
import FacingIssue from '../component/FacingIssue';

<<<<<<< HEAD
const Home = ({loggedInUser}) => {
  return (
    <>
      
      <Navbar loggedInUser={loggedInUser}/>
      <FacingIssue/>
=======
const Home = () => {

  return (
    <>
      
      <Navbar/>
      <FacingIssue />
>>>>>>> ac215c89db03ae12c497af80f20a309924e718af
      <MainHome/>
      <Why/>
      <Reviews/>
      <Atom/>
      <Footer/>
    </>
  )
}

export default Home
