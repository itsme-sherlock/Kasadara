import React from "react";
import Card from "./Cards";
import "../WhatWillYouGet.css";
import { ReactComponent as GraduateHatSvg } from "../../Assets/CourseFees/SchoolSvg.svg";
import { ReactComponent as WriteToUsSvg } from "../../Assets/CourseFees/border_color.svg";

function CourseFee() {
  return (
    <section
      className="overflow-auto rounded-lg w-full h-screen text-center flex gap-10 "
      style={{
        // background: 'linear-gradient(219deg, rgba(123, 17, 93, 0.00) -9.63%, #591B76 82.78%)',
        background:
          "var(--K-grad-2, linear-gradient(219deg, #7B115D -9.77%, #591B76 83.29%))",
      }}
    >
      <div className="pt-24 pl-20 flex flex-col items-start">
        <div className="ml-0">
            <h1 className="text-[#D0D0D0] font-poppins font-medium text-5xl ">Course fee</h1>
        </div>
        <div>
            <h4 className="text-[#C49485] font-poppins font-normal text-2xl">Affordable education</h4>
        </div>
        <div className="flex gap-8 pt-4">
          <div className="flex gap-4 items-center ">
            <p className="text-[#D0D0D0] font-poppins font-normal text-base ">Other Bootcamp Fee</p>
            <button className="fees-button bg-[#B1343B]">₹ 80,000</button>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-[#D0D0D0] font-poppins font-normal text-base">Kasadara</p>
            <button className="fees-button bg-[#0F8C41] ">₹ 49,500</button>
          </div>
        </div>
        <div className="flex ml-0 pl-0 pt-8">
        <p className="text-[#D0D0D0] font-poppins font-normal text-base text-left">We believe in making quality education accessible without burdening your finances. Our UX bootcamp stands out for its affordability, and we provide flexible payment plans to accommodate a range of budgets</p>
         
        </div>
        <div className="flex bg-[#00005C)] gap-4 items-center pt-4  ">
        <GraduateHatSvg></GraduateHatSvg>
        <p className="text-[#D0D0D0] font-poppins font-normal text-base">Colleges students can avail scholarships</p>
        <div className="flex gap-2 items-center">
          <WriteToUsSvg ></WriteToUsSvg>
          <button className="pink-button">Write to us</button>

        </div>

        </div>
      </div>
      <div className="pt-40">
        <Card
          title="2-Month Payment Plan"
          fee="₹ 27,500"
          description="Total:  ₹ 55,000"
          gst="Inclusive of GST"
        />
      </div>
      <div className="pt-40 pr-32">
        <Card
          title="Single 
            Payment Plan"
          fee="₹ 49,500"
          description="You will save ₹ 6,000."
          gst="Inclusive of GST"
        />
        {/* Add more cards with different content */}
      </div>
    </section>
  );
}

export default CourseFee;
