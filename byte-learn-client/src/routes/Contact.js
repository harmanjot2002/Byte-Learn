import React from 'react'
import Navbar from "../component/Navbar";
import ContactForm from '../component/ContactForm';
import Footer from '../component/Footer';

const Contact = ({loggedInUser}) => {
  return (
    <div>
      <Navbar loggedInUser={loggedInUser}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
