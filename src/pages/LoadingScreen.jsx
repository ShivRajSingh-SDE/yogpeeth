import React from "react";
import Qr from "../assets/img/QR.png";

const LoadingScreen = () => {
  return (
    <div className="loading-screen bg-[#38ff38c4]  h-[100vh]">
      <div className="spinner flex flex-col">
        <img
          className=" h-[20vh]"
          src="https://imgs.search.brave.com/8MVDzJt0tuZVw0pAXh3gI5IHj6PTadOum1OdwsVXqhI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltZzEvMTg5/MjAxMC5wbmc"
        ></img>
        <div className=" flex flex-row">
          <img
            className="spinner-element h-[30vh]"
            src="https://imgs.search.brave.com/10K4FP87m6ff2u1ceLWAjZ6g2uLRxuvoRnwkT888RhE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3lvZ2EtcG5n/LXlvZ2EtcG9zZXMt/cG5nLTIzNjIucG5n"
          ></img>
          <img
            className="spinner-element h-[30vh]"
            src="https://imgs.search.brave.com/10K4FP87m6ff2u1ceLWAjZ6g2uLRxuvoRnwkT888RhE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3lvZ2EtcG5n/LXlvZ2EtcG9zZXMt/cG5nLTIzNjIucG5n"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
