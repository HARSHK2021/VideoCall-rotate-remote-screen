import React from "react";

const CallDialog = ({ peerId, setRemotePeerId, startCall }) => {
  return (
    <div className="mt-5 p-4 bg-gray-800 rounded-lg">
      <p className="mb-2">Your ID: <span className="font-mono">{peerId}</span></p>
      <input
        type="text"
        placeholder="Enter Peer ID"
        onChange={(e) => setRemotePeerId(e.target.value)}
        className="p-2 rounded-md bg-gray-700 text-white outline-none"
      />
      <button onClick={startCall} className="ml-3 px-4 py-2 bg-blue-500 rounded-md">
        Call
      </button>
    </div>
  );
};

export default CallDialog;
