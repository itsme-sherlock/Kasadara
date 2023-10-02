// src/components/NavBar.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as LogoSvg } from "../Assets/Logo light.svg";
import { Link } from "react-scroll";

function NavBar({ navbarRef }) {
  const iconStyle = {
    color: "#84ED9B", // Change 'red' to your desired color
  };
  console.log("navbarRef:", navbarRef);
  return (
    // if you change py-2 here then you have change accordingly in  props.height in MainContent.js
    <header
      className=" bg-[#191919] py-2 z-10 sticky top-0 "
      data-navbar="sticky"
      ref={navbarRef}
    >
      <nav className=" flex  items-center justify-around flex-wrap ">
        <div className=" flex text-white">
          <LogoSvg></LogoSvg>
        </div>
        <div className="hidden p-4 lg:flex ">
          <ul className="flex gap-6  ">
            <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
              <Link to="course-journey" smooth={true} duration={500}>
                Course Journey
              </Link>
            </li>
            <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
              Why Us
            </li>
            <li className="text-[#D0D0D0] hover:text-white cursor-pointer">
              <Link to="Upcoming Batch" smooth={true} duration={500} offset={-72}>
                Upcoming Batch
              </Link>
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
        </div>
        <div className="items-center flex-wrap flex-shrink gap-6 hidden lg:flex">
          <div className="flex items-center flex-wrap  flex-shrink">
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            <div className="text-[#84ED9B]">+911234567890</div>
          </div>
          <div className=" border border-white rounded-md px-4 py-2">
            <button className="text-white">Get in touch</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
