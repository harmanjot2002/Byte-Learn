// Attending.js
import React from 'react';
import Navbar from "../component/Navbar";
import Attend from '../component/Attend';
import Footer from '../component/Footer'; 

const Attending = ({ loggedInUser }) => {

  return (
    <div>
      <Navbar loggedInUser={loggedInUser} />
      {/* Display the email in the component */}
      <h2>Email: {loggedInUser}</h2>
      <Attend />
      <Footer />
    </div>
  );
}

export default Attending;
