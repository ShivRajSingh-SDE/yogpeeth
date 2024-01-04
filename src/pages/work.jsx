import React from "react";
import { AiOutlineFolder, AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

import { blog2 } from "../data";

export default function work() {
  return (
    <div className="" id="main2">
      <div className="max-w-[1100px] p-5 md:p-0  mx-auto h-[auto] my-10 ">
        <h1 className="text-[40px] justify-center items-center flex text-[#000000cc] font-bold my-20">
          Our Certificate
        </h1>
        <div className="md:flex flex-row justify-around p-2 max-w-[1100px] mx-auto text-white">
          {blog2.map((items) => (
            <div>
              <img className=" p-2" src={items.cer}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
