import React from 'react';
import './MainHome.css';
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const MainHome = () => {
    const [text]=useTypewriter({
        words:['Byte','Learn'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:90,

    });
  return (
    <div className="page-container">
    <div className="section section1">
        <h1 className='FontSize'><span style={{color:"#6674cc"}}>Learn</span> With <span className='textt'>{text}</span><span><Cursor/></span></h1>
        <h2 className='FontSize2'>The Ultimate Guide to Ace <br />SDE Interviews</h2>

 <div>
      <Link to="/courses" className='linkc'> <button className='button1' >View Courses</button></Link>
      <Link to="/contact" className='linkc'> <button className='button2'>Contact Us</button></Link>
        </div>
    </div>
   
    <div className="section section2">
    <img
        src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcdn.thecodehelp.in%2Fbzfszobhjsgbjk2xb2ha_275f4fb989.png&w=3840&q=75"
        alt="Animated"
        className="background-image"
      />
    </div>
  </div> 
  )
}

export default MainHome
