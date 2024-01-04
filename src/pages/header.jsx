import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { AiOutlineSlackSquare, AiOutlineSlack } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="header-container 
     max-w-[full] mx-auto md:p-1 bg-[#69f84585] shadow-[#b7a9eb63] border-1 sticky z-50 top-0 flex justify-between items-center duration-300 shadow-2xl rounded-br-3xl rounded-bl-3xl"
    >
      <a href="/">
        <div className="logo  border-2 p-2 rounded-lg">
          <img src={logo} className="h-[50px] " alt="Logo" />
          {/* <h1 className="text-[20px] text-[#808080ce]">Shiv</h1> */}
        </div>
      </a>
      {toggle ? (
        <AiOutlineSlackSquare
          onClick={toggleMenu}
          className="md:hidden block text-[50px] text-[#000000]"
        />
      ) : (
        <AiOutlineSlack
          onClick={toggleMenu}
          className="md:hidden block text-[50px] text-[#000000]"
        />
      )}

      <ul className="hidden md:flex text-[#000000] justify-center items-center flex-row gap-5 text-[16px] font-bold">
        <li className="hover:scale-110 duration-300 ease-in-out hover:text-[#279723]">
          <Link to="main" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 ease-in-out hover:text-[#279723]">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            About Us
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 ease-in-out hover:text-[#279723]">
          <Link to="main2" spy={true} smooth={true} offset={-70} duration={500}>
            Our Services
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 ease-in-out hover:text-[#279723]">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
        <li className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex bg-[white] rounded-2xl text-[black] hover:text-[#279723]">
          <a href="https://wa.me/8800260731">ENQUIRE NOW</a>
        </li>
      </ul>

      <ul
        className={`responsive md:hidden text-black fixed w-[100%] h-[100%] top-20 bg-white justify-center items-center flex-row gap-5 text-[16px] font-bold ${
          toggle ? "left-[0]" : "left-[-100%]"
        }`}
      >
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex hover:text-[#279723]"
        >
          <Link
            onClick={toggleMenu}
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex hover:text-[#279723]"
        >
          <Link
            onClick={toggleMenu}
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex hover:text-[#279723]"
        >
          <Link
            onClick={toggleMenu}
            to="main2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Our Services
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex hover:text-[#279723]"
        >
          <Link
            onClick={toggleMenu}
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
          >
            Contact Us
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex bg-[white] rounded-2xl text-[black] hover:text-[#279723]"
        >
          <a onClick={toggleMenu} href="https://wa.me/8800260731">
            ENQUIRE NOW
          </a>
        </li>
      </ul>
    </div>
  );
}
