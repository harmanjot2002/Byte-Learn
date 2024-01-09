import React from 'react';
import './recordedvdo.css'


const recordedvdo = () => {
  return (
    <div>
      <div className='viddiv'>
       <video className='vidm' controls>
       <source src='https://drive.google.com/uc?id=11yGFo0xSXzoCVWbga4_cYO79xu5ERwGh
' type="video/mp4"/></video>
      </div>
    </div>
  )
}

export default recordedvdo
