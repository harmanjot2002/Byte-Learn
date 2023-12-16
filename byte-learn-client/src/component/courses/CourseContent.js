import React,{useState} from 'react';
import './CourseContent.css';
import 'font-awesome/css/font-awesome.min.css';

const CourseContent = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // for second 

  const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const toggleDropdown2 = () => {
    setDropdownVisible2(!isDropdownVisible2);
  };

  // for third 
  const [isDropdownVisible3, setDropdownVisible3] = useState(false);

  const toggleDropdown3 = () => {
    setDropdownVisible3(!isDropdownVisible3);
  };

  //for fourth
  const [isDropdownVisible4, setDropdownVisible4] = useState(false);

  const toggleDropdown4 = () => {
    setDropdownVisible4(!isDropdownVisible4);
  };

  // for fifth
  const [isDropdownVisible5, setDropdownVisible5] = useState(false);

  const toggleDropdown5 = () => {
    setDropdownVisible5(!isDropdownVisible5);
  };

   // for sixth 

   const [isDropdownVisible6, setDropdownVisible6] = useState(false);

   const toggleDropdown6 = () => {
     setDropdownVisible6(!isDropdownVisible6);
   };


  return (
    <>
      <div className='contentouter'>
        <div className='tocenter'>
          <hr style={{ width: "100%", size: "20" }} />
          <h2 className='content-heading'>Course Content</h2>
          <div className='contentpara' onClick={toggleDropdown}>
            <p className='drop-para'>HTML Basics</p>
            <img
              className={`dropdown-img ${isDropdownVisible ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downpara ${isDropdownVisible ? 'show' : ''}`}>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Setting up tools, Introduction to Web Development, Basics of HTML</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Understanding and Handling Forms and Input</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Selectors and Introduction to Styling, Different types of CSS</p>
          </div>

          {/* Second dropdownpata */}

          <div className='contentpara' onClick={toggleDropdown2}>
            <p className='drop-para'>CSS Basics</p>
            <img
              className={`dropdown-img ${isDropdownVisible2 ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downpara ${isDropdownVisible2 ? 'show' : ''}`}>
            <br />
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Selectors, Box Model, Styling Fonts and Images</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Learn About Height-Width</p>
          </div>

          {/* Third Downpara */}
          <div className='contentpara' onClick={toggleDropdown3}>
            <p className='drop-para'>Flex Box and Grid</p>
            <img
              className={`dropdown-img ${isDropdownVisible3 ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downpara ${isDropdownVisible3 ? 'show' : ''}`}>
            <br />
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>CSS Flexbox, Responsiveness, Grid Container,</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Minor Project based on HTML and CSS</p>
          </div>

          {/* Fourth Downpara */}

          <div className='contentpara' onClick={toggleDropdown4}>
            <p className='drop-para'>Animation and Responsiveness</p>
            <img
              className={`dropdown-img ${isDropdownVisible4 ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downpara ${isDropdownVisible4 ? 'show' : ''}`}>
        
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Animation and keyframes , Transition, Shorthand Animation</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Media Query, Responsive Design of Text and Images</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Responsive Mini Project</p>
          </div>

           {/* Fifth para  */}

           <div className='contentpara' onClick={toggleDropdown5}>
            <p className='drop-para'>JavaScript Basics</p>
            <img
              className={`dropdown-img ${isDropdownVisible5 ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downpara ${isDropdownVisible5 ? 'show' : ''}`}>
        
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Introduction to JS, Variable, Datatypes,Operator Precidence</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Control Statements if else, loops, Switch Case, Array and Strings</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Scope Chaining, this keyword, Functions, Callback, Arrow Functions</p>
          </div>

            {/* Sixth para */}
            <div className='contentpara' onClick={toggleDropdown6}>
            <p className='drop-para'>DOM Manipulation and Modern JS</p>
            <img
              className={`dropdown-img ${isDropdownVisible6 ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downpara ${isDropdownVisible6 ? 'show' : ''}`}>
        
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>DOM, BOM, Window Object, Mini Project</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Async-Await, Event Loop, Event Listners</p>
            <p className='downn'><i className="fa fa-video-camera" aria-hidden="true"></i>Classes and Exports, Getters and Setters, Promises, Fetch</p>
          </div>
          <hr style={{ width: "100%", size: "20",marginTop:"10%" }} />
        </div>
      </div>
    </>
  );
}

export default CourseContent;

