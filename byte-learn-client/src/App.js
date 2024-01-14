import React , { useState, useEffect }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import SplashScreen from './routes/SplashScreen';
import Courses from './routes/Courses';
import WebDev from './routes/WebDev';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import LiveLec from './routes/LiveLecture';
import Attending from './routes/Attending';
import RoomPage from '../src/component/room/RoomPage';
import Videeo from './component/recordedvdo';


const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleLogin = (email) => {
    console.log('Logged in user:', email);
    setLoggedInUser(email);
  };

  return (
    <div className="App">
   
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home loggedInUser={loggedInUser}/>} />
          <Route path="/contact" element={<Contact loggedInUser={loggedInUser}/>} />
          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
          <Route path="/register" element={<Signup />}/>
          <Route path="/courses" element={<Courses loggedInUser={loggedInUser}/>} />
          <Route path="/live" element={<LiveLec loggedInUser={loggedInUser}/>} />
          <Route path="/webdev" element={<WebDev loggedInUser={loggedInUser}/>} />
          <Route path="/attending" element={<Attending loggedInUser={loggedInUser} />} />
          {/* <Route path="/attending" element={<Attending loggedInUser={loggedInUser} />} /> */}
          <Route path="/room/:roomId/:roomName" element={<RoomPage/>}/>
          <Route path="/videeo" element={<Videeo />}/>
        </Routes>
      </Router>
        
        </>
      )}
    </div>
  )
}

export default App;
