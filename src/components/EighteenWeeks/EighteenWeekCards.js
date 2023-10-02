import React from "react";
import "../WhatWillYouGet/WhatWillYouGet.css";
export function Cards({ week, heading, orderedList }) {
  return (
    // parent container
    <div className="eighteen-week-cards">
      {/* week section */}
      <div className="flex gap-2 items-center">
        <div className="week-bg">
          <p className="text-[#B01873]">{week}</p>
        </div>
        <p className="text-[#323232] font-poppins font-semibold text-sm">
          online
        </p>
      </div>
      {/* heading section */}
      <div className="text-[#591B76] font-poppins font-semibold text-2xl">
        {heading}
      </div>
      {/* ordered list */}
      <ol className=" list-disc ml-4 text-[#323232] font-poppins font-normal text-sm">
        {orderedList.map((item, index) => (
          <li className="mb-2" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}
export function MobileCard({ week, orderedList }) {
  return (
    <div className="eighteen-week-cards my-4 w-[90%]">
      {/* week section */}
      <div className="flex font-semibold gap-2 items-center">
        <div className="week-bg">
          <p className="text-[#B01873]">{week}</p>
        </div>
        <p className="text-[#323232] font-poppins font-semibold text-sm">
          online
        </p>
      </div>
      {/* ordered list */}
      <div className="text-[#323232] font-poppins font-normal text-sm">
        {orderedList.map((item, index) => (
          <li className="mb-2 theme-pink font-semibold text-sm" key={index}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}
export default Cards;
