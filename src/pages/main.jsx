import { Parallax } from "react-parallax";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Main() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const [form, setForm] = useState({ name: "", mobile: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link with pre-filled data
    const mailtoLink = `mailto:upcharyogayurved@gmail.com?subject=${encodeURIComponent(
      "Form Submission"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}%0A Mobile: ${form.mobile}%0A Message: ${form.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      id="main"
      className="max-w-[full]  mx-auto  bg-slate-100 flex justify-center items-center h-[60vh] relative md:h-[100vh]"
    >
      <div className=" md:w-[50%]  "></div>
      <div className="w-full max-w-md mx-auto bg-[]  ">
        <img
          className=" md:hidden flex"
          src="https://www.yogpeethregistration.com/images/home-banner.jpg"
        ></img>
        <form
          className="bg-white w-[full] shadow-md  drop-shadow-2xl shadow-2xl  rounded-2xl  px-8 pt-6 pb-6 mb-"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobile"
              type="num"
            >
              Mobile
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile"
              type="num"
              name="mobile"
              pattern="[0-9]*"
              value={form.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[green] hover:bg-[#54ca54c9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
