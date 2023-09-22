import React from "react";
import Card from "./Cards";
import "../WhatWillYouGet/WhatWillYouGet.css";
import { ReactComponent as GraduateHatSvg } from "../../Assets/CourseFees/SchoolSvg.svg";
import { ReactComponent as WriteToUsSvg } from "../../Assets/CourseFees/border_color.svg";

function CourseFee() {
  return (
    <section
      className="text-center sm:flex gap-10 "
      style={{
        // background: 'linear-gradient(219deg, rgba(123, 17, 93, 0.00) -9.63%, #591B76 82.78%)',
        background:
          "var(--K-grad-2, linear-gradient(219deg, #7B115D -9.77%, #591B76 83.29%))",
      }}
    >
      <div className="sm:pt-20 sm:pl-16 flex flex-col sm:flex-row ">
        <div className="flex-1 px-4 py-8 text-left">
          {/* section heading */}
          <div className="ml-0">
            <h1 className="text-[#D0D0D0] font-poppins font-medium text-2xl sm:text-5xl ">
              Course fee
            </h1>
          </div>
          {/* sub heading */}
          <div>
            <h4 className="text-[#C49485] font-poppins font-normal text-sm sm:text-2xl">
              Affordable education
            </h4>
          </div>
          {/* price-rate in button */}
          <div className="flex flex-col sm:gap-8 py-4 sm:flex-row">
            <div className="flex gap-4 justify-between items-center  py-4">
              <p className="text-[#D0D0D0] font-poppins font-normal text-sm sm:text-base ">
                Other Bootcamp Fee
              </p>
              <button className="fees-button bg-[#B1343B] text-xs sm:text-lg sm:font-semibold font-poppins">
                ₹ 80,000
              </button>
            </div>
            <div className="flex gap-4 justify-between items-center">
              <p className="text-[#D0D0D0] font-poppins font-normal text-sm sm:text-base">
                Kasadara
              </p>
              <button className="fees-button bg-[#0F8C41] text-xs sm:text-lg sm:font-semibold font-poppins">
                ₹ 49,500
              </button>
            </div>
          </div>
          {/* paragraph-content */}
          <div className="flex ml-0 pl-0 py-2  ">
            <p className="text-[#D0D0D0] text-left font-poppins font-normal text-xs sm:text-base sm:text-left">
              We believe in making quality education accessible without
              burdening your finances. Our UX bootcamp stands out for its
              affordability, and we provide flexible payment plans to
              accommodate a range of budgets
            </p>
          </div>
          {/* write to us section for large screens */}
          <div className="sm:w-[full] justify-center sm:justify-start hidden sm:flex ">
            <div className="flex flex-col w-fit sm:flex-row items-center justify-between my-4 p-4 bg-black bg-opacity-30 gap-3 rounded-md">
              <GraduateHatSvg></GraduateHatSvg>
              <p className="text-[#D0D0D0] font-poppins text-center font-normal text-xs sm:text-base">
                Colleges students can avail scholarships
              </p>
              <div className="flex gap-1 items-center">
                <button className="pink-button">
                  <WriteToUsSvg></WriteToUsSvg>
                  Write to us
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex-1  flex flex-col-reverse sm:justify-around">
          {/* write to us section only for small screen */}
          <div className="flex sm:w-[full] justify-center sm:justify-start sm:hidden">
            <div className="flex flex-col w-fit sm:flex-row items-center justify-between my-4 sm:p-4 px-5 py-5 rounded-md bg-black bg-opacity-30 ">
              <GraduateHatSvg></GraduateHatSvg>
              <p className="text-[#D0D0D0] font-poppins font-normal word whitespace-nowrap text-xs sm:text-base py-2 w-full">
                Colleges students can<br className="sm:block hidden"></br> avail
                scholarships
              </p>
              <div className="flex gap-2 items-center">
                <WriteToUsSvg></WriteToUsSvg>
                <button className="pink-button">Write to us</button>
              </div>
            </div>
          </div>
          {/* price-card */}
          <div className="flex px-4 overflow-x-auto gap-6 ">
            <div className="whitespace-pre-line">
              <Card
                title={`Two Month
                  Payment Plan`}
                fee="₹ 27,500"
                description="Total:  ₹ 55,000"
                gst="Inclusive of GST"
              />
            </div>
            <div className="whitespace-pre-line">
              <Card
                title={`Single Month
                Payment Plan`}
                fee="₹ 49,500"
                description="You will save ₹ 6,000."
                gst="Inclusive of GST"
              />
              {/* Add more cards with different content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseFee;
