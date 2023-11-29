import React from 'react'
import {VscFileCode,VscLayersActive} from "react-icons/vsc";
import {PiWechatLogo} from "react-icons/pi";
import {RiChatPollLine} from "react-icons/ri";
import {TbAward} from "react-icons/tb";
import {FaBookReader} from "react-icons/fa";
import './WhyStyles.css';

const Why = () => {
  return (
    <div className="why">
        <h1>Why <span style={{color:"var(--main-color)"}}>Byte Learn?</span></h1>
        <div className="container" >
        <div className="card" style={{ "--clr": "#a6e29d" }}>
          <div className="box">
            <div className="icon">
              <div className="iconBox">
                <VscFileCode size={60} style={{"color":"#a6e29d",marginLeft:"1rem",marginBottom:"-0.2rem" ,cursor:"pointer"}}/>
              </div>
            </div>
            <div className="content">
                <h3>Data Structures And Algorithms</h3>
                <p>Data structures are problem-solving pillars of coding.Learn foundational knowledge about popular them that you need to be well-versed in interviews.</p>
              </div>
          </div>
        </div>
        <div className="card" style={{"--clr": "pink"}}>
          <div className="box">
            <div className="icon">
              <div className="iconBox">
                <VscLayersActive size={60} style={{"color":"pink",marginLeft:"1rem",marginBottom:"-0.2rem" ,cursor:"pointer"}}/>
              </div>
            </div>
            <div className="content">
                <h3>Placement Preparation</h3>
                <p>Ace the placement interviews by being knowledgeable in all well-known data structures, popular problem-solving methods, and core computer sciences.</p>
              </div>
          </div>
        </div>
        <div className="card" style={{"--clr": "#c39797"}}>
          <div className="box">
            <div className="icon">
              <div className="iconBox">
                <PiWechatLogo size={60} style={{"color":"#c39797",marginLeft:"1rem",marginBottom:"-0.2rem" ,cursor:"pointer"}}/>
              </div>
            </div>
            <div className="content">
                <h3>Hand Picked Question</h3>
                <p>Get access to hand-picked coding interview questions across categories & difficulty levels that will prepare you for every interview you would encounter.</p>
              </div>
          </div>
        </div>
        <div className="card" style={{ "--clr": "#9ccaed" }}>
          <div className="box">
            <div className="icon">
              <div className="iconBox">
                <RiChatPollLine size={60} style={{"color":"#9ccaed",marginLeft:"1rem",marginBottom:"-0.2rem" ,cursor:"pointer"}}/>
              </div>
            </div>
            <div className="content">
                <h3>Curated Content</h3>
                <p>Learn in-depth conceptual overviews, how to approach an algorithm, how to implement it & how to optimize it.</p>
              </div>
          </div>
        </div>
        <div className="card" style={{"--clr": "#f6eba3"}}>
          <div className="box">
            <div className="icon">
              <div className="iconBox">
                <TbAward size={60} style={{"color":"#f6eba3",marginLeft:"1rem",marginBottom:"-0.2rem" ,cursor:"pointer"}}/>
              </div>
            </div>
            <div className="content">
                <h3>Learn from the best</h3>
                <p>Get access to lectures and get mentored by one of the best mentors and tutors in the market.</p>
              </div>
          </div>
        </div>
        <div className="card" style={{"--clr": "#d1c4ec"}}>
          <div className="box">
            <div className="icon">
              <div className="iconBox">
                <FaBookReader size={60} style={{"color":"#d1c4ec",marginLeft:"1rem",marginBottom:"-0.2rem" ,cursor:"pointer"}}/>
              </div>
            </div>
            <div className="content">
                <h3>Learn Something New</h3>
                <p>Learn new concepts daily, increase your productivity & reach your full potential.</p>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Why
