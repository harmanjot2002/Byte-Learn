import React from 'react';
import './OverviewStyles.css';

const Overview = () => {
  return (
    <div className="overview">
      <h5>What you will learn</h5>
      <div className="grid-container">
        <div className="left-column">
          <ul>
            <li><span className="purple-tick">&#10003;</span> HTML, CSS, JavaScript</li>
            <li><span className="purple-tick">&#10003;</span> CSS Animations</li>
            <li><span className="purple-tick">&#10003;</span> End to End React.js Application</li>
            <li><span className="purple-tick">&#10003;</span> No Prerequisite required</li>
          </ul>
        </div>
        <div className="right-column">
          <ul>
            <li><span className="purple-tick">&#10003;</span> Tailwind CSS</li>
            <li><span className="purple-tick">&#10003;</span> Core JavaScript</li>
            <li><span className="purple-tick">&#10003;</span> 15+ Industry Grade Projects</li>
            <li><span className="purple-tick">&#10003;</span> End to End Backend with Node.js and Express.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
