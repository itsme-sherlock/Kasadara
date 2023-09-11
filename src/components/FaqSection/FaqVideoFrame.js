import React from "react";
function videoFrame() {
  return (
    <div className="flex">
      <div className="flex bg-slate-400 relative sm:w-[327px] w-[208px] sm:h-[184px] h-[145px] justify-center items-center rounded-md">
        {/*Play button SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
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
      </div>
    </div>
  );
}
export default videoFrame;
