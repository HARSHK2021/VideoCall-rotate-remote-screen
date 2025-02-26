import React, { forwardRef } from "react";

const VideoPlayer = forwardRef(({ title }, ref) => (
  <div className="flex flex-col items-center">
    <video ref={ref} className="w-80 h-60 border border-gray-700 rounded-lg" autoPlay playsInline />
    <p className="mt-2">{title}</p>
  </div>
));

export default VideoPlayer;
