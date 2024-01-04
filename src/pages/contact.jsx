import { AiFillMobile } from "react-icons/ai";
import React, { useState } from "react";

export default function Contact() {
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

        setForm({ name: "", mobile: "", message: "" });
      } else {
        console.error("Error submitting form data to backend");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div id="main" className="">
      <div id="contact" className=" bg-[#00000050]">
        <div className="max-w-[1000px] p-4 bg-[#ffffffce] rounded-3xl my-10  mx-auto justify-center items-center flex flex-col ">
          <h1 className=" text-[50px] my-10 text-[#000000]">
            <span id="span"></span> Contact Us
          </h1>
          <div className=" md:flex flex-row justify-between md:space-x-5 items-center">
            <div className=" my-5 justify-center items-center flex md:flex-none ">
              <a href="/">
                <h1 className=" font-semibold text-2xl">OUR SERVICES</h1>
                <ul className=" flex flex-col justify-center items-start">
                  <li className=" flex flex-row justify-center items-center p-1">
                    <AiFillMobile /> Accommodation
                  </li>
                  <li className=" flex flex-row justify-center items-center p-1">
                    <AiFillMobile /> Yoga Therapy
                  </li>
                  <li className=" flex flex-row justify-center items-center p-1">
                    <AiFillMobile /> Yoga & Meditation
                  </li>
                  <li className=" flex flex-row justify-center items-center p-1">
                    <AiFillMobile /> Online Booking
                  </li>
                </ul>
              </a>
            </div>

            <div>
              <div className="w-full max-w-md mx-auto bg-[]  ">
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

            <div className=" md:w-[30%] w-[70%] md:translate-x-1 translate-x-16 my-5  ">
              <a href="/">
                <h1 className=" font-semibold text-2xl -translate-x-3">
                  CONTACT DETAILS
                </h1>
                <ul className=" flex flex-col justify-center items-start">
                  <li>
                    <span className=" font-semibold">Address :</span>{" "}
                    Delhi-Haridwar National Highway, Near Bahadrabad,
                    Haridwar-249405, Uttarakhand, (Bharat)
                  </li>
                  <li>
                    <span className=" font-semibold">Mobile :</span>{" "}
                    +91-9064997409
                  </li>
                  <li>
                    <span className=" font-semibold">Email :</span>{" "}
                    info@yogasharam.co.in
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
