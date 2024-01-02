// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import './attend.css';

// const Facultyroom = ({randomCode}) => {

//     // const [roomCode,setRoomCode]=useState('');
//     const [roomName,setRoomName]=useState('');
//     const navigate=useNavigate();
//     const handleFormSubmit=(ev)=>{
//        ev.preventDefault();
//        navigate(`/room/${randomCode}/${roomName}`);
//     }

//   return (
//     <div className='attend-live'>
//         <div className='cen'>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//         <label htmlFor="roomName" className='leb'>Enter Your Name: &nbsp;</label>
//             <input type="text" value={roomName} onChange={e=>setRoomName(e.target.value)} id="roomName" required placeholder='Enter your Name' className='inpfld' /><br /> <br />
//             <label htmlFor="roomcode" className='leb'>Room code: &nbsp;</label>
//             <input type="text" value={JSON.stringify(randomCode)} id="roomcode" required placeholder={JSON.stringify(randomCode)} className='inpfld' /><br /> 
//             <button className='b'>Take Class</button>
           
//         </div>
//       </form>
//       </div>
//     </div>
//   )
// }

// export default Facultyroom;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './attend.css';

const Facultyroom = ({ randomCode }) => {
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
            <label htmlFor="roomcode" className='leb'>Room code: &nbsp;</label>
            <input type="text" value={randomCode} id="roomcode" required placeholder={randomCode} className='inpfld' /><br />

            <button className='b'>Take Class</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Facultyroom;
