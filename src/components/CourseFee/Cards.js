import React from 'react';
import "../WhatWillYouGet.css";
const Card = ({ title, fee, description,gst }) => {
  return (
    <div className="card w-[210px] display-card flex flex-col items-stretch ">
      <h2 className='text-black pb-6 text-2xl font-poppins font-semibold'>{title}</h2>
      <p className='theme-pink font-poppins font-bold text-3xl'>{fee}</p>
      <p style={{ color: "var(--K-primary-1, #B01873)", fontSize: "16px", fontStyle: "normal", fontWeight: "600", lineHeight: "normal" }}>{description}</p>

      <p className='text-black'>{gst}</p>
      <button className='pink-button font-extrabold'>JOIN OUR BOOTCAMP!</button>
    </div>
  );
};

export default Card;
