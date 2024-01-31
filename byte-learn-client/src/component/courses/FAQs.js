import React,{useState} from 'react';
import './FAQs.css';
import 'font-awesome/css/font-awesome.min.css';


const FAQs = () => {
  const [isDropdownVisible10, setDropdownVisible10] = useState(false);
 
  const toggleDropdown10 = () => {
    setDropdownVisible10(!isDropdownVisible10);
  };

  // for second 

  const [isDropdownVisible11, setDropdownVisible11] = useState(false);

  const toggleDropdown11 = () => {
    setDropdownVisible11(!isDropdownVisible11);
  };

  // for third 
  const [isDropdownVisible12, setDropdownVisible12] = useState(false);

  const toggleDropdown12 = () => {
    setDropdownVisible12(!isDropdownVisible12);
  };

  //for fourth
  const [isDropdownVisible13, setDropdownVisible13] = useState(false);

  const toggleDropdown13 = () => {
    setDropdownVisible13(!isDropdownVisible13);
  };


  return (
    <>
      <div className='contentouterF'>
        <div className='tocenterF'>
          <hr style={{ width: "100%", size: "20" }} />
          <h2 className='content-headingF'>FAQs</h2>
          <div className='contentparaF' onClick={toggleDropdown10}>
            <p className='drop-paraF'>I don't have any Prior experience of any Programing Language Can I take this Course?</p>
            <img
              className={`dropdown-imgF ${isDropdownVisible10 ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downparaF ${isDropdownVisible10 ? 'show' : ''}`}>
            <p className='downnF'>Yes, This Course does not require any pre requisite you can startoff with this Course</p>
          </div>

          {/* Second dropdownpata */}

          <div className='contentparaF' onClick={toggleDropdown11}>
            <p className='drop-paraF'>Will I get the Recorded Access of this Course?</p>
            <img
              className={`dropdown-imgF ${isDropdownVisible11 ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downparaF ${isDropdownVisible11 ? 'show' : ''}`}>
            <p className='downnF'>Yes a Recording of 1 Year will be Provided after Completion of the Course</p>
          </div>


          {/* Third Downpara */}
          <div className='contentparaF' onClick={toggleDropdown12}>
            <p className='drop-paraF'>Do I need to Learn DSA before Learning Web Development</p>
            <img
              className={`dropdown-imgF ${isDropdownVisible12 ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downparaF ${isDropdownVisible12 ? 'show' : ''}`}>
        
            <p className='downnF'>No You don't need any prior Knowledge of DSA or any Programming Language Before Enrolling into this Course</p>
           
          </div>

          {/* Fourth Downpara */}

          <div className='contentparaF' onClick={toggleDropdown13}>
            <p className='drop-paraF'>I live outside of India, so how can I purchase the course?</p>
            <img
              className={`dropdown-imgF ${isDropdownVisible13 ? 'rotate-180' : ''}`}
              src="https://i.ibb.co/z8d8pyM/down-arrow.png"
              alt=""
            />
          </div>

          <div className={`downparaF ${isDropdownVisible13 ? 'show' : ''}`}>
        
            <p className='downnF'>The feature for international payments will be enabled by 22nd December.</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default FAQs