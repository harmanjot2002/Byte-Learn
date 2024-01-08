import React, { useState } from 'react';
import Navbar from "../component/Navbar";
import Attend from '../component/Attend';
import Footer from '../component/Footer'; 
import FacultyRoom from '../component/Facultyroom';

const Attending = ({ loggedInUser }) => {
  const isByteLearnEmail = loggedInUser && loggedInUser.endsWith('@bytelearn.in');
  const randomCode="12Dm*7645";

  return (
    <div>
      <Navbar loggedInUser={loggedInUser} />
      {isByteLearnEmail ? (
        <FacultyRoom  randomCode={randomCode} />
      ) : (
        <Attend  randomCode={randomCode}/>
      )}
      <Footer />
    </div>
  );
}

export default Attending;

