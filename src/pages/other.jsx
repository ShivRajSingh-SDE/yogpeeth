import React from "react";
import { AiOutlineFolder, AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { blog } from "../data";

export default function Other() {
  return (
    <div className="" id="main2">
      <div className="max-w-[1100px] p-5 md:p-0  mx-auto h-[auto] my-10 md:h-[90vh]">
        <h1 className="text-[40px] justify-center items-center flex text-[#000000cc] font-bold my-20">
          Our Services
        </h1>
        <div className="md:flex flex-row justify-around p-2 max-w-[1100px] mx-auto text-white">
          {blog.map((val) => (
            <div
              key={val.id} // Added a unique key to the parent div
              id="appcolor"
              className="w-[100%] relative md:w-[30%] bg-[#3cff3c2c] shadow-[#6c43ff6e] drop-shadow-2xl shadow-2xl 
             hover:-translate-y-5 duration-200 ease-in-out my-10 flex shadow-3xl rounded-lg flex-col items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#f3f4f5"
                  fill-opacity="1"
                  d="M0,128L0,160L288,160L288,256L576,256L576,192L864,192L864,64L1152,64L1152,288L1440,288L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z"
                ></path>
              </svg>
              <div className="gap-20 m-5 text-[30px] flex flex-row">
                <img src={val.cover}></img>
              </div>

              <h1 className="m-3 font-bold text-[25px] text-black">
                <a href={val.gitlink}>{val.name}</a>
              </h1>
              <div className="flex m-3  flex-col justify-between">
                <a
                  className="p-2 bg-[green]  text-[white] font-semibold rounded-2xl justify-center
                 items-center flex"
                  href={val.gitlink}
                >
                  ENQUIRE NOW
                </a>
              </div>
              <img
                className="
             absolute md:h-[70px] h-[130px] shadow-fuchsia-700 top-10 rotate-12 left-0
             "
                src="https://imgs.search.brave.com/8MVDzJt0tuZVw0pAXh3gI5IHj6PTadOum1OdwsVXqhI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltZzEvMTg5/MjAxMC5wbmc"
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
