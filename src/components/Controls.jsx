import React, { useState } from "react";

const Controls = ({ toggleMute, isMuted, toggleVideo, isVideoOn, rotateVideo }) => {
  return (
    <div className="mt-4 flex space-x-4">
      <button onClick={toggleMute} className="px-4 py-2 bg-red-500 rounded-md">
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <button onClick={toggleVideo} className="px-4 py-2 bg-green-500 rounded-md">
        {isVideoOn ? "Turn Off Camera" : "Turn On Camera"}
      </button>
      <button onClick={rotateVideo} className="px-4 py-2 bg-yellow-500 rounded-md">
        Rotate
      </button>
    </div>
  );
};

export default Controls;
