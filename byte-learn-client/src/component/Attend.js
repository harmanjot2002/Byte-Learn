import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './attend.css';

const Attend = () => {
    const [roomCode,setRoomCode]=useState('');
    const [roomName,setRoomName]=useState('');
    const navigate=useNavigate();
    const handleFormSubmit=(ev)=>{
       ev.preventDefault();
       navigate(`/room/${roomCode}/${roomName}`);
    }

  return (
    <div className='attend-live'>
        <div className='cen'>
      <form onSubmit={handleFormSubmit}>
        <div>
        <label htmlFor="roomName" className='leb'>Enter Your Name: &nbsp;</label>
            <input type="text" value={roomName} onChange={e=>setRoomName(e.target.value)} id="roomName" required placeholder='Enter your Name' className='inpfld' /><br /> <br />
            <label htmlFor="roomcode" className='leb'>Enter the Room code: &nbsp;</label>
            <input type="text" value={roomCode} onChange={e=>setRoomCode(e.target.value)} id="roomcode" required placeholder='Enter the room code' className='inpfld' /><br /> 
            <button className='b'>Enter Room</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Attend
