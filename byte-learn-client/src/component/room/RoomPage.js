import React from "react";
import './roompage.css';
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
const RoomPage=()=>{
  const {roomId} =useParams();
  const {roomName}=useParams();
  const myMeeting=async(element)=>{
    const appID = 1800141387;
    const serverSecret = "89bf511b0c87a36e5b9a4c607139fb04";
    const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),roomName);
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container:element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
       },
    });
  }

  return (
    <>

    <div className="room-page">

        <div ref={myMeeting} className="donn"/>
    </div>
    </>
  )
}

export default RoomPage;