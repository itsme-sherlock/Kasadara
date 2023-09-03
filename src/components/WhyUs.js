import React from "react";
import collageImage from '../Assets/WhyUs/collage1.png'


function WhyUs() {
  return (
    <section
      className="overflow-auto rounded-lg w-full h-screen text-center "
      style={{
        // background: 'linear-gradient(219deg, rgba(123, 17, 93, 0.00) -9.63%, #591B76 82.78%)',
        background:
          "var(--K-grad-2, linear-gradient(219deg, #7B115D -9.77%, #591B76 83.29%))",
      }}
    >
      <div className="my-24 flex-col flex items-start pl-20  ">
        <h1 className="text-white font-poppins font-extrabold text-4xl ">
          Why Us?
        </h1>
        <div className="py-3"></div>
        {/*Empty Space to give sapce bteween*/}
        <p className="text-white font-poppins font-normal text-xl flex">
          Hear from our mentors who have{" "}
          <span className="text-[#84ED9B] font-poppins font-normal text-xl">
            {" "}
            deep expertise in
          </span>
        </p>
        <p className="text-[#84ED9B] font-poppins font-normal text-xl">
          {" "}
          product and service industries
        </p>
      </div>
      
      <div className="h-[50%] flex items-center">
        {/*video content 👇*/}
        <div className="container w-[50%] h-full flex justify-center items-center  border border-white mx-20">
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
        <div className="grid grid-cols-3 gap-4">
           {/* Row 1 */}
      <div className=''></div>
      <div className="w-32 h-32 rounded-full overflow-hidden"><img src={collageImage}
      alt="photoTop"  className="object-center w-full h-full"/></div>
      <div className=""></div>
      
      {/* Row 2 */}
      <div className="w-16 h-16 rounded-full overflow-hidden"><img src={collageImage}
      alt="photoTop"  className="object-center w-full h-full"/></div>
      <div className="mx-10"></div>
      <div className="w-28 h-28 rounded-full overflow-hidden"><img src={collageImage}
      alt="photoTop"  className="object-center w-full h-full"/></div>
      {/* Row 3 */}
      <div className=""></div>
      <div className="w-32 h-32 rounded-full overflow-hidden"><img src={collageImage}
      alt="photoTop"  className="object-center w-full h-full"/></div>
      <div className=""></div>
        </div>
      </div>
      
    </section>
  );
}
export default WhyUs;
