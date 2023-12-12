import React from 'react';
import './OverviewStyles.css';

const Overview = () => {
  return (
    <div className="overview" id="overview">
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
      <div className="details-container">
      <h5 className="section-title">Basic Details</h5>
      <table className="details-table">
        <tbody>
          <tr>
            <td>Mode of the Course</td>
            <td>Online Recorded Lectures</td>
          </tr>
          <tr>
            <td>Technologies that you will learn</td>
            <td>HTML, CSS, JavaScript, MongoDB, Express.js, React.js, Node.js</td>
          </tr>
          <tr>
            <td>No. of Lectures</td>
            <td>72</td>
          </tr>
          <tr>
            <td>Class Recording Provided</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Course Validity</td>
            <td>1.5 Years</td>
          </tr>
        </tbody>
      </table>
    </div>

    </div>

  );
};

export default Overview;
