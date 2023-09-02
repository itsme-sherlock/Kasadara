// src/components/NavBar.js

import React from "react";
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  const iconStyle = {
    color: '#84ED9B', // Change 'red' to your desired color
  };
  return (
    <header className="bg-[#191919] p-4">
    <nav className="flex justify-center">
      
  
      <ul className="flex gap-6">
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Course Journey
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Why Us
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Upcoming Batch
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Course Fee
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Syllabus
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          FAQ
        </li>
      </ul>
      
     
    </nav>
  </header>
  
  );
}

export default NavBar;

/* // src/components/NavBar.js

import React from "react";
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  const iconStyle = {
    color: '#84ED9B', // Change 'red' to your desired color
  };
  return (
    <header className="bg-[#191919] p-4">
    <nav className="container flex justify-center items-center gap-28 px-14">
      <div className=" flex text-white">Logo</div>
  
      <ul className="flex min-w-fit space-x-4 flex-grow justify-center items-center gap-6">
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Course Journey
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Why Us
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Upcoming Batch
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Course Fee
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          Syllabus
        </li>
        <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
          FAQ
        </li>
      </ul>
      
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4 items-center">
          <FontAwesomeIcon icon={faPhone} style={iconStyle} />
          <div className="text-[#84ED9B]">+911234567890</div>
        </div>
        <div className="flex justify-center items-center border rounded-md border-white px-4 py-2">
          <button className="text-white whitespace-nowrap font-bold">
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  </header>
  
  );
}

export default NavBar;
        
      */
