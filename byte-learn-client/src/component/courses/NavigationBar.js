import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBarStyles.css';
import { HashLink as Link } from 'react-router-hash-link';

const NavigationBar = () => {
  return (
    <div className='navigation'>
        <Link to="#overview" className="nav-link" >
          Overview
        </Link>
        <Link to="#coursecontent" className="nav-link">
          Course Content
        </Link>
        <Link to="#instructors" className="nav-link">
          Instructors
        </Link>
        <Link to="#faqs" className="nav-link">
          FAQs
        </Link>
    </div>
  );
};

export default NavigationBar;
