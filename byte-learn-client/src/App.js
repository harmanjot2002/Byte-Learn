import React , { useState, useEffect }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import SplashScreen from './routes/SplashScreen';
import Courses from './routes/Courses';
import WebDev from './routes/WebDev';
// import Overview from './component/courses/Overview';
// import CourseContent from './component/courses/CourseContent';
// import Instructors from './component/courses/Instructors';
// import FAQs from './component/courses/FAQs';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
   
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Signup />}/>
          <Route path="/courses" element={<Courses/>} />
          <Route path="/webdev" element={<WebDev/>} />
          {/* <Route path="/webdev/overview" element={<Overview/>}></Route>
          <Route path="/webdev/coursecontent" element={<CourseContent/>}></Route>
          <Route path="/webdev/instructors" element={<Instructors/>}></Route>
          <Route path="/webdev/faqs" element={<FAQs/>}></Route> */}
        </Routes>
      </Router>
        
        </>
      )}
    </div>
  )
}

export default App;