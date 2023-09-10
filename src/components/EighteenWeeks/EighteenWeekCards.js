import React from "react";
import '../WhatWillYouGet/WhatWillYouGet.css'
function Cards({ week, heading, orderedList }) {
  return (
    <div className="eighteen-week-cards">
      <div className="flex gap-2 items-center">
        <div className="week-bg">

        <p className="text-[#B01873]">{week}</p>
        </div>
        <p className="text-[#323232] font-poppins font-semibold text-sm">online</p>
      </div>
      <div className="text-[#591B76] font-poppins font-semibold text-2xl">{heading}</div>
      <div className="text-[#323232] font-poppins font-normal text-sm">
        {orderedList.map((item, index) => (
          <li className="mb-2" key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
}
export default Cards;
