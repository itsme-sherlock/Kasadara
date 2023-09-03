import React from "react";
import "./WhatWillYouGet.css";
import { ReactComponent as PassionateYouSvg } from "../Assets/Section 2/Passionate you.svg";
import { ReactComponent as StrongSvg } from "../Assets/Section 2/Strong and unmatched foundation in UX.svg";
import { Element } from "react-scroll";

function WhatWillYouGet() {
  return (
    <Element name="course-journey">
        <section>
      <div className="m-16">
        <h1 className="text-[#323232] font-poppins font-extrabold text-4xl pr-5">
          What you will get in<span className="text-[#B01873] font-poppins font-extrabold text-4xl"> the 18 week
          </span>
        </h1>
      </div>
      <div className="mx-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="p-4">
            <PassionateYouSvg></PassionateYouSvg>
          </div>
          <div className="p-4">
            <StrongSvg></StrongSvg>
            <p className="text-base font-poppins font-extrabold">
              Strong and unmatched foundation in UI UX
            </p>
            <p className="font-poppins">
              We focus on solid foundation that gives our students confidence
              and set them apart from competition
            </p>
          </div>
          <div className="p-4">
            
            <StrongSvg></StrongSvg>
            <p className="text-base font-poppins font-extrabold">
              Strong and unmatched foundation in UI UX
            </p>
            <p className="font-poppins">
              We focus on solid foundation that gives our students confidence
              and set them apart from competition
            </p>
          </div>
          <div className="p-4">
            
            <StrongSvg></StrongSvg>
            <p className="text-base font-poppins font-extrabold">
              Strong and unmatched foundation in UI UX
            </p>
            <p className="font-poppins">
              We focus on solid foundation that gives our students confidence
              and set them apart from competition
            </p>
          </div>

          {/* Row 2 */}
          <div className="p-4">
            
            <StrongSvg></StrongSvg>
            <p className="text-base font-poppins font-extrabold">
              Strong and unmatched foundation in UI UX
            </p>
            <p className="font-poppins">
              We focus on solid foundation that gives our students confidence
              and set them apart from competition
            </p>
          </div>
          <div className="p-4">
            
            <StrongSvg></StrongSvg>
            <p className="text-base font-poppins font-extrabold">
              Strong and unmatched foundation in UI UX
            </p>
            <p className="font-poppins">
              We focus on solid foundation that gives our students confidence
              and set them apart from competition
            </p>
          </div>
          <div className="p-4">
            
            <StrongSvg></StrongSvg>
            <p className="text-base font-poppins font-extrabold">
              Strong and unmatched foundation in UI UX
            </p>
            <p className="font-poppins">
              We focus on solid foundation that gives our students confidence
              and set them apart from competition
            </p>
          </div>
          <div className="p-4">
            <StrongSvg></StrongSvg>
            <p className="text-base font-poppins font-extrabold">
              Strong and unmatched foundation in UI UX
            </p>
            <p className="font-poppins">
              We focus on solid foundation that gives our students confidence
              and set them apart from competition
            </p>
          </div>
        </div>
      </div>
    </section> 
    </Element>

    
  );
}

export default WhatWillYouGet;
