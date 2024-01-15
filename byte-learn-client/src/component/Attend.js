import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './attend.css';

const Attend = ({ randomCode }) => {
  const [roomName, setRoomName] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/room/${randomCode}/${roomName}`);
  };

  return (
    <div className='attend-live'>
      <div className='cen'>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="roomName" className='leb'>Enter Your Name: &nbsp;</label>
            <input type="text" value={roomName} onChange={e => setRoomName(e.target.value)} id="roomName" required placeholder='Enter your Name' className='inpfld' /><br /> <br />

            {/* Display and hold the value of randomCode in the input field */}
            <input type="text" value={randomCode} id="roomcode" required className='inpfld2' placeholder={randomCode} /><br />

            <button className='bb1'>Join Class</button>
            <h1></h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Attend;

