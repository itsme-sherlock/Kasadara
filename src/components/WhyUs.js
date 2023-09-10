import React from "react";
import collageImage from "../Assets/WhyUs/collage1.png";
// import { useState } from "react";

function WhyUs() {
  
  
  return (
    <section
      className="overflow-hidden rounded-lg text-center "
      style={{
        // background: 'linear-gradient(219deg, rgba(123, 17, 93, 0.00) -9.63%, #591B76 82.78%)',
        background:
          "var(--K-grad-2, linear-gradient(219deg, #7B115D -9.77%, #591B76 83.29%))",
      }}
    >
      <div className="my-6 sm:my-12 flex flex-col items-start ml-4 sm:ml-0 sm:pl-20 sm:w-full  ">
        <h1 className="text-white font-poppins font-extrabold text-2xl sm:text-4xl ">
          Why Us?
        </h1>
        <div className="py-3"></div>
        {/*Empty Space to give sapce bteween*/}
        <p className="text-white font-poppins font-normal text-xs sm:text-xl text-left">
          Hear from our mentors who have{" "}
          <span className="text-[#84ED9B] font-poppins font-normal text-xs sm:text-xl">
            deep expertise in{" "}
          </span>
          <span className="text-[#84ED9B] font-poppins font-normal text-xs sm:text-xl">
            product and service industries
          </span>
        </p>
      </div>

      <div className="flex flex-col justify-around sm:flex-row items-center my-6 sm:my-24">
        {/*video content 👇*/}
        <div className="container py-16 w-[90%] sm:py-24 sm:w-[40%] h-full flex justify-center items-center  border border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
          >
            <g filter="url(#filter0_b_574_806)">
              <circle
                cx="36"
                cy="36"
                r="36"
                fill="url(#paint0_linear_574_806)"
                fill-opacity="0.7"
              />
            </g>
            <path
              d="M57 36L25.5 54.1865L25.5 17.8135L57 36Z"
              fill="white"
              fill-opacity="0.4"
            />
            <defs>
              <filter
                id="filter0_b_574_806"
                x="-10"
                y="-10"
                width="92"
                height="92"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_574_806"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_574_806"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_574_806"
                x1="61.92"
                y1="-20.9085"
                x2="2.56642"
                y2="52.2953"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7B115D" />
                <stop offset="1" stop-color="#591B76" />
              </linearGradient>
            </defs>
          </svg>
          {/*Play button SVG */}
        </div>
        {/*Grid for photo Frames*/}
        <div className="my-12 sm:grid flex sm:grid-cols-3 gap-4 ">
          {/* Row 1 */}
          <div className="hidden sm:block"></div>
          <div className="w-14 sm:w-32 h-14 sm:h-32 rounded-full overflow-hidden">
            <img
              src={collageImage}
              alt="photoTop"
              className="object-center w-full h-full"
            />
          </div>
          <div className="hidden sm:block"></div>

          {/* Row 2 */}
          <div className="w-14 sm:w-32 h-14 sm:h-32 rounded-full overflow-hidden">
            <img
              src={collageImage}
              alt="photoTop"
              className="object-center w-full h-full"
            />
          </div>
          <div className="mx-10 hidden sm:block "></div>
          <div className="w-14 sm:w-32 h-14 sm:h-32 rounded-full overflow-hidden">
            <img
              src={collageImage}
              alt="photoTop"
              className="object-center w-full h-full"
            />
          </div>
          {/* Row 3 */}
          <div className="hidden sm:block"></div>
          <div className="w-14 sm:w-32 h-14 sm:h-32 rounded-full overflow-hidden">
            <img
              src={collageImage}
              alt="photoTop"
              className="object-center w-full h-full"
            />
          </div>
          <div className=""></div>
        </div>
      </div>
      
    </section>
  );
}
export default WhyUs;
