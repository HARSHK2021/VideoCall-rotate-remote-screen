import React, { useState, useRef, useEffect } from "react";
import Peer from "peerjs";
import VideoPlayer from "./components/VideoPlayer";
import Controls from "./components/Controls";
import CallDialog from "./components/CallDialog";

const App = () => {
  const [rotation, setRotation] = useState(0);

const rotateVideo = () => {
  setRotation((prev) => prev + 90);
  if (remoteVideoRef.current) {
    remoteVideoRef.current.style.transform = `rotate(${rotation + 90}deg)`;
  }
};
  const [peerId, setPeerId] = useState("");
  const [remotePeerId, setRemotePeerId] = useState("");
  const [peer, setPeer] = useState(null);
  const [call, setCall] = useState(null);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  useEffect(() => {
    const newPeer = new Peer();
    newPeer.on("open", (id) => setPeerId(id));

    newPeer.on("call", (incomingCall) => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
        localVideoRef.current.srcObject = stream;
        incomingCall.answer(stream);

        incomingCall.on("stream", (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
        });

        setCall(incomingCall);
      });
    });

    setPeer(newPeer);
  }, []);

  const startCall = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localVideoRef.current.srcObject = stream;

      const outgoingCall = peer.call(remotePeerId, stream);
      outgoingCall.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
      });

      setCall(outgoingCall);
    });
  };

  const toggleMute = () => {
    const tracks = localVideoRef.current.srcObject.getAudioTracks();
    tracks.forEach(track => track.enabled = !isMuted);
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    const tracks = localVideoRef.current.srcObject.getVideoTracks();
    tracks.forEach(track => track.enabled = !isVideoOn);
    setIsVideoOn(!isVideoOn);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-4">Video Chat App</h1>

      <div className="flex space-x-5">
        <VideoPlayer ref={localVideoRef} title="Your Video" />
        <VideoPlayer ref={remoteVideoRef} title="Remote Video" />
      </div>

      <CallDialog peerId={peerId} setRemotePeerId={setRemotePeerId} startCall={startCall} />

      <Controls toggleMute={toggleMute} isMuted={isMuted} toggleVideo={toggleVideo} isVideoOn={isVideoOn} rotateVideo={rotateVideo} />
    </div>
  );
};

export default App;
