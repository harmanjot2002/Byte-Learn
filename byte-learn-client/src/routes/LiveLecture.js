import React from 'react'
import Navbar from "../component/Navbar";
import LiveLec from '../component/LiveLecture';
import Footer from '../component/Footer';


const LiveLecture = ({loggedInUser}) => {
    return (
        <div>
          <Navbar loggedInUser={loggedInUser}/>
          <LiveLec />
          <Footer/>
        </div>
      )
}

export default LiveLecture
