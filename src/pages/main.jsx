import { Parallax } from "react-parallax";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Main() {
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP POST request to the backend
      const response = await fetch("http://localhost:8000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
        alert("Thanks For Reaching US");
        setSubmitted(true);
        // Reset the form after submission if needed
        setForm({ name: "", mobile: "", message: "" });
      } else {
        console.error("Error submitting form data to backend");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      id="main"
      className="max-w-[full] mx-auto bg-slate-100 md:flex justify-center items-center h-[100vh] relative md:h-[100vh]"
    >
      <div className="md:w-[50%]"></div>
      <div className="w-full max-w-md mx-auto bg-[]">
        <img
          className="md:hidden flex"
          src="https://www.yogpeethregistration.com/images/mob-banner.jpg"
          alt="Mobile Banner"
        />
        <form
          className="bg-[#22ffed] md:bg-slate-200 md:mt-1 mt-10 md:m-1 m-5 w-[full] shadow-md drop-shadow-2xl shadow-2xl rounded-2xl px-8 pt-6 pb-6 mb-"
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
