import React from "react";
import "../WhatWillYouGet/WhatWillYouGet.css";
const Card = ({ title, fee, description, gst }) => {
  return (
    // Card container
    <div className=" bg-gray-200 rounded-lg flex flex-col items-center sm:items-start px-3 py-3 sm:px-6 sm:py-6">
      {/* card title */}
      <h2 className="text-black pb-6 text-base sm:text-2xl font-poppins font-semibold text-start">
        {title}
      </h2>
      <div className="flex flex-col sm:items-start items-center ">
        {/* fees */}
        <p className="theme-pink font-bold text-2xl sm:text-4xl ">
          {fee}
        </p>
        {/* description of the fees */}
        <p
          style={{
            color: "var(--K-primary-1, #B01873)",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          {description}
        </p>
        {/* Inclusive of GST */}
        <p className="text-black text-sm pb-4">{gst}</p>
      </div>
       {/* join our bootcamp button */}
       <div className="sm:mt-4">
        <button
          className="my-4 pink-button h-[34px] sm:h-[50px]  text-xs sm:text-sm hover:bg-[#B01873] whitespace-nowrap"
        >
          Join our bootcamp
        </button>
      </div>
    </div>
  );
};
export default Card;
