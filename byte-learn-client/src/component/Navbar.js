import "./NavbarStyles.css";
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Navbar = ({ loggedInUser }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    console.log('loggedInUser in Navbar:', loggedInUser);
  }, [loggedInUser]);

  const extractNameFromEmail = (email) => {
    // Assuming email format is consistent
    const username = email.split('@')[0];
    return username;
  };

  return (
    <div className="header">
      <div className="logo" style={{ display: "flex" }}>
        <img src="./favicon.ico" alt="icon" height={40} width={50} />
        <Link to="/"><h1>BYTE <span style={{ color: "#6674cc" }}>LEARN</span></h1></Link>
      </div>

      <ul className={click ? "nav-menu.active" : "nav-menu"}>
        <li>
          <NavLink to="/">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          {/* <NavLink to="/live">Live Lectures</NavLink> */}
          <Navbar loggedInUser={loggedInUser} />
      {loggedInUser? (
       <NavLink to="/live">Live Lectures</NavLink>
      ) : (
        <NavLink to="/register">Live Lectures</NavLink>
      )}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {loggedInUser ? (
          <>
            <li>
              <NavLink to="/register" className="btn1" target="_blank" rel="noreferrer">
                Logout <FiLogIn size={20} style={{ color: '#fff', cursor: "pointer" }} />
              </NavLink>
            </li>
            <li style={{marginLeft:"-4%"}} className="chcolo">
              Welcome, <br />{extractNameFromEmail(loggedInUser)}
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/register" className="btn1" target="_blank" rel="noreferrer">
              Login <FiLogIn size={20} style={{ color: '#fff', cursor: "pointer" }} />
            </NavLink>
          </li>
        )}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {
          click ?
            (<FaTimes size={20} style={{ color: "#0c0c0c" }} />) :
            <FaBars size={20} style={{ color: "#0c0c0c" }} />
        }
      </div>
    </div>
  );
};

export default Navbar;
