// // Attending.js
// import React,{useState, useEffect} from 'react';
// import Navbar from "../component/Navbar";
// import Attend from '../component/Attend';
// import Footer from '../component/Footer'; 
// import FacultyRoom from '../component/Facultyroom';

// const Attending = ({ loggedInUser }) => {
//   const isByteLearnEmail = loggedInUser && loggedInUser.endsWith('@bytelearn.in');
//   const length=8;
//   const [randomCode, setRandomCode] = useState('');
//   const generateRandomCode = (length) => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let code = '';

//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       code += characters[randomIndex];
//     }
//     setRandomCode(code);
//   };
//   generateRandomCode(length);
//   return (
//     <div>
//       <Navbar loggedInUser={loggedInUser} />
//       {/* Display the email in the component */}
//       {/* <h2>Email: {loggedInUser}</h2> */}
//       {isByteLearnEmail?(<FacultyRoom/>):(<Attend/>)}
//       <h1>randomCode</h1>
//       <Footer />
//     </div>
//   );
// }

// export default Attending;

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

