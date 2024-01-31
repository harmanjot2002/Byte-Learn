import React from "react";
import './roompage.css';
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
const RoomPage=()=>{
  const {roomId} =useParams();
  const {roomName}=useParams();
  const myMeeting=async(element)=>{
    const appID = 687427739;
    const serverSecret = "a69796d30761327530a905be132e3c93";
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