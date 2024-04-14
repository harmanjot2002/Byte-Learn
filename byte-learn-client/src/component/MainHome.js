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
 <Link to="https://task-manager-phi-red.vercel.app/" target="_blank" className='linkc'> <button className='button1' >Meet Your Deadlines </button></Link>
      {/* <Link to="/contact" className='linkc'> <button className='button2'>Manage Your tasks</button></Link> */}
        </div>
    </div>
   
    <div className="section section2">
    <img
        src="https://i.ibb.co/PDF8pT7/fa7e6e04b27bb2cfb7670a24eb743be9-removebg-preview.png" alt="fa7e6e04b27bb2cfb7670a24eb743be9-removebg-preview"
        alt="Animated"
        className="background-image"
      />
    </div>
  </div> 
  )
}

export default MainHome
