import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='Mainm'>
   <div className='FootDiv'>
    <div className='div1'>
        <h2 className='Difhead' >Byte Learn
            </h2>
            <h3>The Ultimate Guide To Ace SDE <br /> Interviews.</h3> 
    </div>
    <div className='div2'> 
      <ul><h3>Menu</h3>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/livelectures">Live Lectures</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
    <div className='div3'>
      <ul><h3>Services</h3>
      <li>Privacy Policy</li>
      <li>Terms of use</li>
      <li>Refund & Cancellation Policy</li></ul>
    </div> 
    <div className='div4'><h3>Get In Touch</h3>
    <Link to="/contact">support@bytelearn.in</Link>
    </div>
   
   </div>
   <hr style={{marginTop:"5rem",width:"80%",marginLeft:"8rem",color:"rgb(201, 195, 195)"}} />
   <div className='last'>
  <p > Copyright © 2023 Sorting Byte Learning Technologies Pvt Ltd. All Rights Reserved.</p></div>
   </div>
  
   </>
  )
}

export default Footer
