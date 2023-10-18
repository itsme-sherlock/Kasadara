// Modal.js
import React, { useState,useEffect } from "react";
import "./WhatWillYouGet/WhatWillYouGet.css";

const Modal = ({ isOpen, closeModal }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
   useEffect(() => {
    // Clear the form fields when the modal is opened
    if (isOpen) {
      setName('');
      setMobile('');
      setEmail('');
    }
  }, [isOpen]);

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can access the name and mobile values here
    console.log("Name:", name);
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    // You can also perform any additional actions, such as closing the modal
    
    closeModal();
  };
  if (!isOpen) return null;

  return (
    <div className="modal ">
      <div className="modal-content w-full sm:w-[44%]">
        {/* Modal content goes here */}
        <div className="flex justify-between items-center px-8 py-3">

        <h1 className="font-poppins text-2xl font-semibold">Contact Us</h1>
        <button className="text-2xl font-semibold" onClick={closeModal}>X</button>
        </div>
        <form onSubmit ={handleSubmit} className="flex flex-col px-8 py-3 gap-y-4">
          {/* name section */}
          <div className="flex flex-col items-start gap-y-2">
            <label
              htmlFor="name"
              className="font-poppins text-xl font-normal"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg py-2 px-3 focus:border-[#591B76] focus:border-2 border border-black"
            //   style={{border: '1px solid var(--K-black-font, #323232)',height: '48px'}}
              value={name}
              required
              onChange={handleNameChange}
            />
            <p className="font-poppins text-sm font-normal">Name should be at least 3 letters long.</p>
          </div>
          {/* phone number */}
          <div className="flex flex-col items-start gap-y-2">
            <label
              htmlFor="mobile"
              className="font-poppins text-xl font-normal"
            >
              Mobile Number
            </label>
            <input
              type="number"
              id="mobile"
              className="w-full rounded-lg px-3 py-2 text-gray-700 leading-tight focus:border-[#591B76] focus:border-2 border border-black"
            //   style={{border: '1px solid var(--K-black-font, #323232)',height: '48px'}}
              value={mobile}
              required
              onChange={handleMobileChange}
            />
            <p className="font-poppins text-sm font-normal">We'll protect your data as fiercely as a dragon guards its treasure.</p>
          </div>
          {/* email */}
          <div className="flex flex-col items-start gap-y-2">
            <label
              htmlFor="email"
              className="font-poppins text-xl font-normal"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:border-[#591B76] focus:border-2 border border-black"
            //   style={{border: '1px solid var(--K-black-font, #323232)',height: '48px'}}
              value={email}
              required
              onChange={handleEmailChange}
            />
            
          </div>
          {/* submit button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#B01873] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
