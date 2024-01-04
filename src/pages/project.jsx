import React from "react";
import img1 from "../assets/img/Screenshot 2023-10-21 142412.png";
import img2 from "../assets/img/chatbot.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function project() {
  const items = [
    <div
      className="item bg-[#6c43ff33] drop-shadow-2xl shadow-2xl     rounded-3xl flex flex-col"
      data-value="1"
    >
      <img className="  rounded-3xl shadow-2xl" src={img1}></img>
      <div
        className=" p-2 justify-center
       items-center flex  flex-col"
      >
        <h1 className=" font-bold  md:text-[30px] text-[#808080da] text-[20px]">
          Smart Education Based Web App
        </h1>
        <div
          className=" md:flex flex-row justify-center
          items-center
          "
        >
          <h1
            className=" font-bold  justify-center items-center
            flex  text-[#3fb9ff]"
          >
            Tech Used :
          </h1>
          <div className=" gap-4 p-1">
            <span className=" text-[pink] font-bold"> React.Js,</span>
            <span className=" text-[green] font-bold"> Express.js,</span>
            <span className=" text-[red] font-bold"> Tailwind,</span>
            <span className=" text-[greenyellow] font-bold"> MongoDB,</span>
            <span className=" text-[gray] font-bold"> LLM Api,</span>
            <span className=" text-[orange] font-bold"> Node.Js</span>
          </div>
        </div>
        <div className=" justify-center items-center flex p-1">
          <a
            alt="new"
            target="_blank"
            href="https://github.com/shivamkumarsha/SmartEduBeta2.0
            "
          >
            <button
              className="
          p-2 bg-white border-2 text-black font-bold rounded-3xl"
            >
              Git Link
            </button>
          </a>
        </div>
      </div>
    </div>,

    <div
      className="item bg-[#6c43ff33] drop-shadow-2xl shadow-2xl rounded-2xl justify-center items-center flex flex-col"
      data-value="2"
    >
      <img className=" rounded-3xl shadow-2xl" src={img2}></img>

      <div
        className=" p-2 justify-center
       items-center flex  flex-col"
      >
        <h1 className=" font-bold text-[#808080da]  md:text-[30px] text-[20px]">
          Smart LLM Based Chat Bot
        </h1>
        <div
          className=" md:flex flex-row justify-center
          items-center
          "
        >
          <h1
            className=" font-bold  justify-center items-center
            flex  text-[#3fb9ff]"
          >
            Tech Used :
          </h1>
          <div className=" gap-4 p-1">
            <span className=" text-[pink] font-bold"> React.Js,</span>
            <span className=" text-[green] font-bold"> Express.js,</span>
            <span className=" text-[red] font-bold"> Tailwind,</span>
            <span className=" text-[greenyellow] font-bold"> MongoDB,</span>
            <span className=" text-[gray] font-bold"> LLM Api,</span>
            <span className=" text-[orange] font-bold"> Node.Js,</span>
            <span className=" text-[#f747d0] font-bold"> Gpt3.5Turbo</span>
          </div>
        </div>
        <div className=" justify-center items-center flex p-1">
          <a
            alt="new"
            target="_blank"
            href="https://github.com/shivamkumarsha/ChatBot
            "
          >
            <button
              className="
          p-2 bg-white border-2 text-black font-bold rounded-3xl"
            >
              Git Link
            </button>
          </a>
        </div>
      </div>
    </div>,
    <div
      className="item bg-[#6c43ff33] drop-shadow-2xl shadow-2xl  justify-center items-center flex flex-col"
      data-value="3"
    >
      <img
        className=" rounded-3xl shadow-2xl"
        src="https://github.com/shivamkumarsha/tweerlio_react/blob/main/Screenshot%202023-09-11%20231920.png?raw=true"
      ></img>

      <div
        className="  p-2 justify-center
     items-center flex  flex-col"
      >
        <h1 className=" font-bold text-[#808080da]  md:text-[30px] text-[20px]">
          Smart E-com site
        </h1>
        <div
          className=" md:flex flex-row justify-center
        items-center
        "
        >
          <h1
            className=" font-bold  justify-center items-center
          flex  text-[#3fb9ff]"
          >
            Tech Used :
          </h1>
          <div className=" gap-4 p-1">
            <span className=" text-[pink] font-bold"> React.Js,</span>
            <span className=" text-[green] font-bold"> Express.js,</span>
            <span className=" text-[red] font-bold"> Tailwind,</span>
            <span className=" text-[greenyellow] font-bold"> MongoDB,</span>
            <span className=" text-[gray] font-bold"> Mui</span>
            <span className=" text-[#f747d0] font-bold"> Node.Js,</span>
          </div>
        </div>
        <div className=" justify-center items-center flex flex-row gap-5 p-1">
          <a
            alt="new"
            target="_blank"
            href="https://github.com/shivamkumarsha/tweerlio_react
          "
          >
            <button
              className="
        p-2 bg-white border-2 text-black font-bold rounded-3xl"
            >
              Git Link
            </button>
          </a>

          <a
            alt="new"
            target="_blank"
            href="https://tweerlio.netlify.app/
          "
          >
            <button
              className="
        p-2 bg-white border-2 text-black font-bold rounded-3xl"
            >
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>,
  ];

  const renderSlideInfo = ({ item, itemsCount }) => {
    return `${item}\\${itemsCount}`;
  };

  const renderDotsItem = ({ isActive }) => {
    return isActive ? "☠️" : "o";
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <span
        className=" bg-[#6c43ff33] drop-shadow-2xl shadow-2xl p-3 rounded-2xl border-white border-2"
        style={{ opacity: isDisabled ? "0.5" : 1 }}
      >
        Prev
      </span>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <span
        className=" bg-[#6c43ff33] drop-shadow-2xl shadow-2xl p-3 rounded-2xl border-white border-2"
        style={{ opacity: isDisabled ? "0.5" : 1 }}
      >
        Next
      </span>
    );
  };

  const renderPlayPauseButton = ({ isPlaying }) => {
    return isPlaying ? "PAUSE" : "PLAY";
  };

  return (
    <div
      id="Project"
      className="max-w-[1000px]  mx-auto text-[black] h-[auto]  m-5   flex flex-col p-2"
    >
      <h1 className=" font-bold text-[30px] text-[#8080809a] flex p-5 float-left my-8">
        <span id="span">3.</span>Some Things I have Built
      </h1>
      <div
        className="  justify-center
       items-center
        flex flex-col  w-[100%]  max-w-[900px] mx-auto"
      >
        <AliceCarousel
          mouseTracking
          items={items}
          renderDotsItem={renderDotsItem}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
}
