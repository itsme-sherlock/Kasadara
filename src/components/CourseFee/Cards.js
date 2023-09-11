import React from 'react';
import '../WhatWillYouGet/WhatWillYouGet.css'
const Card = ({ title, fee, description,gst }) => {
  return (
    // Card container
    <div className="card w-[212px] sm:w-[210px] h-[227px] sm:h-[336px] display-card  flex flex-col items-stretch  ">
      {/* card title */}
      <h2 className='text-black pb-6 text-base sm:text-2xl font-poppins font-semibold'>{title}</h2>
      {/* fees */}
      <p className='theme-pink font-poppins font-bold text-2xl sm:text-3xl'>{fee}</p>
      {/* description of the fees */}
      <p style={{ color: "var(--K-primary-1, #B01873)", fontSize: "16px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal" }}>{description}</p>
      {/* Inclusive of GST */}
      <p className='text-black text-sm'>{gst}</p>
      {/* join our bootcamp button */}
      <button className='my-4 pink-button
      h-[34px] sm:h-  [50px] w-[164px] sm:w-[170px] font-semibold text-xs sm:text-base'>JOIN OUR BOOTCAMP!</button>
    </div>
  );
};

export default Card;
