import React, { useState } from 'react';
import './NavigationBarStyles.css';
import { HashLink as Link } from 'react-router-hash-link';

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`navigation ${isActive ? 'active' : ''}`}>
      <div className="nav">
        <Link to="#overview" className="nav-link">
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
    </div>
  );
};

export default NavigationBar;