import React from 'react';
import { FaGlobe, FaVideo, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <FaStar key={index} style={{ color: '#ffcf00' }} />
  ));

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" style={{ color: '#ffcf00' }} />);
  }

  return <>{stars}</>;
};

const HomePage = () => {
  const mainSectionStyle = {
    backgroundColor: '#6775cc',
    display: 'flex',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '400px',
    marginBottom:'8rem'
  };
  const leftDivStyle={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }
  const rightDivStyle = {
    height: '450px',
    width: '350px',
    backgroundColor: '#d9def1',
    marginLeft: '50px',
    position: 'absolute',
    right: '50px',
    top: '100px',
    borderRadius: '40px',
  };

  const starRating = 4.8;

  return (
    <section style={mainSectionStyle} className="main-section">
      <div className="left" style={leftDivStyle}>
        <p>Welcome to @dot-dev Family</p>
        <h1>Web Development Master Course @dot Batch</h1>
        <p>
          Build fullstack React.js applications with Node.js, Express.js & MongoDB (MERN) with this project-focused course.
        </p>
        <div className="stars">
          <p>
            4.8&nbsp;&nbsp;&nbsp;
            <StarRating rating={starRating} />
          </p>
        </div>
        <div className="lectures">
          <p>
            <FaGlobe />&nbsp;&nbsp;&nbsp;Hindi
          </p>
          <p>
            <FaVideo />&nbsp;&nbsp;&nbsp;72 lectures
          </p>
        </div>
      </div>
      <div style={rightDivStyle} className="right">
     
      </div>
    </section>
  );
};

export default HomePage;
