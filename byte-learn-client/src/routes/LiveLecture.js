import React from 'react'
import Navbar from "../component/Navbar";
import LiveLec from '../component/LiveLecture';
import Footer from '../component/Footer';


const LiveLecture = () => {
    return (
        <div>
          <Navbar/>
          <LiveLec />
          <Footer/>
        </div>
      )
}

export default LiveLecture
