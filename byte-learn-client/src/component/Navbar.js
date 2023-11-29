import "./NavbarStyles.css"
import React,{useState} from 'react'
import {Link,NavLink} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa";
import {FiLogIn} from "react-icons/fi";
const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);
 
  return (


    <div className="header">
      <div className="logo" style={{display:"flex"}}>
        <img src="./favicon.ico" alt="icon" height={40} width={50}/>
        <Link to="/"><h1>BYTE <span style={{color:"#6674cc"}}>LEARN</span></h1></Link>
      </div>
      
      <ul className={click ? "nav-menu.active" : "nav-menu"}>
        <li>
            <NavLink to="/">About Us</NavLink>
        </li>
        <li>
            <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
            <NavLink to="/livelectures">Live Lectures</NavLink>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <NavLink  to="/register"className="btn1" target="_blank" rel="noreferrer">Login<FiLogIn size={20} style={{color:'#fff'/*,marginLeft:"1rem",marginBottom:"-0.2rem" */,cursor:"pointer"}}/></NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {
          click ? 
            (<FaTimes size={20} style={{color:"#0c0c0c"}}/>) :
            <FaBars size={20} style={{color:"#0c0c0c"}}/>
        }
      </div>
    </div>
  )
}

export default Navbar