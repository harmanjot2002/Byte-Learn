import React from "react";
import './roompage.css';
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
const RoomPage=()=>{
  const {roomId} =useParams();
  const {roomName}=useParams();
  const myMeeting=async(element)=>{
    const appID = 185087669;
    const serverSecret = "1d53d5ab80011415d1edc4b19e6c95f8";
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
