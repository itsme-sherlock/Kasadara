import React from "react";
import { useState } from "react";
function Accordian({ question, answer }) {
    const [isOpen,setIsOpen]=useState(false);
   
    const toggleAccordion = () => {
        // When called, 'toggleAccordion' changes the value of 'isOpen' from 'true' to 'false' or vice versa
        setIsOpen(!isOpen);
        console.log(!isOpen)
      };
    const downArrow = (
        <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        //   transform="rotate(180)"
        >
        <path
            d="M7 7.40039L0.937823 0.0503891L13.0622 0.0503902L7 7.40039Z"
            fill="#323232"
        />
        </svg>
    );
  const upArrow= (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
    >
      <path
        d="M7 7.40039L0.937823 0.0503891L13.0622 0.0503902L7 7.40039Z"
        fill="#323232"
      />
    </svg>
  );

  return (
    <div>
      <div className="border rounded mb-2 font-inter font-medium">
        <div className="cursor-pointer flex items-center justify-between px-4"
        onClick={toggleAccordion}>
          <span className="text-sm sm:text-lg">{question}</span>
          <span>{isOpen ? upArrow:downArrow}</span>
        </div>
        <div className="transition-max-height"></div>
        {isOpen &&<div className="px-4 py-2 font-normal">{answer}</div>}
      </div>
    </div>
  );
}
export default Accordian;
