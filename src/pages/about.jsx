import {
  AiOutlineStrikethrough,
  AiOutlineLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import React from "react";
import mine from "../assets/img/mine.png";
import mine2 from "../assets/img/mine2.png";
import chat from "../assets/img/chat.png";
import { Link } from "react-scroll";

export default function about() {
  return (
    <div
      id="about"
      className="md:flex text-[black]   md:h-[70vh] flex-row my-10 max-w-[1100px] mx-auto"
    >
      <div>
        <div className=" md:flex flex-row p-5  justify-around ">
          <div className=" flex  flex-col md:w-[48%] justify-center ">
            <h1 className=" my-3 text-[green] font-medium text-xl">
              Secure your spot at Yogpeeth Yogashram, Haridwar with our
              hassle-free online registration.
            </h1>

            <div className="">
              <p>
                Yogic Bliss Sanctuary offers a unique blend of ancient healing
                practices like Etherealism, Essence Rejuvenation, Mind-Body
                Synergy, and Detox Modalities in a luxurious, eco-friendly
                setting. Our skilled guides ensure a discreet and revitalizing
                experience, combining Celestial Practices, Ethereal Sciences,
                Acoustic Pressure Technique, and gentle herbal remedies for
                overall well-being. Join us on a journey to physical, mental,
                and spiritual harmony, embracing joy, serenity, and opulence
                amidst the challenges of modern life.
              </p>
            </div>

            <div className=" bg-[#32f032] p-4 my-5 justify-center items-center flex rounded-3xl mt-5">
              <h1 className=" text-white md:text-2xl text-xl  ">
                समदोषः समाग्निश्च समधातु मलक्रियाः। प्रसन्नात्मेन्द्रियमनाः
                स्वस्थ इत्यभिधीयते।।
              </h1>
            </div>

            <div></div>
          </div>

          <div className=" md:w-[49%] ">
            <img
              className=""
              src="https://www.yogpeethregistration.com/images/about-yogpeeth.jpg"
            ></img>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 md:flex hidden animate-bounce md:bottom-0 text-[#6c43ff] font-semibold right-0  ">
        <a
          className="flex flex-row justify-center items-center gap-5 hover:scale-105 ease-in-out duration-200"
          href="https://wa.me/+918800260731"
          target="_blank"
        >
          <img className="md:h-[100px] h-[70px] " src={chat}></img>
        </a>
      </div>

      <div className="fixed bottom-0 w-full md:hidden  z-50  text-white  md:bottom-0 flex flex-row  font-semibold    ">
        <div className=" bg-[#45ff34cc] w-full p-3 ">
          <a
            className="flex flex-row justify-center items-center gap-5 hover:scale-105 ease-in-out duration-200"
            href="https://wa.me/+918240639117"
            target="_blank"
          >
            <div className=" flex justify-center items-center text-[15px]">
              <AiFillMail className="" />
              <Link to="main">Whatsapp Us</Link>
            </div>
          </a>
        </div>

        <div className=" bg-[#98ce98] text-black p-3 w-full">
          <a
            className="flex flex-row justify-center items-center gap-5 hover:scale-105 ease-in-out duration-200"
            href="tel:+918240639117"
            target="_blank"
          >
            <div className="text-[15px] flex justify-center items-center  ">
              <AiFillPhone />
              Call
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
