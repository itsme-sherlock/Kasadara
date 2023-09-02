import React from "react";
import { ReactComponent as ChatSvg } from "../Assets/Section 2/All we need from you.svg"; // Replace with the actual path to your SVG file
import {ReactComponent as UnderlyingSvg} from "../Assets/Section 2/undying commitment.svg";
function MainContent() {
  return (
    <section
      className="w-full h-screen text-center overflow-auto"
      style={{
        // background: 'linear-gradient(219deg, rgba(123, 17, 93, 0.00) -9.63%, #591B76 82.78%)',
        background:
          "var(--K-grad-2, linear-gradient(219deg, #7B115D -9.77%, #591B76 83.29%))",
      }}
    >
      <div className="m-28">
        <div className="text-white font-segoeui font-extrabold  text-7xl py-2">
          Master UX UI Design
        </div>
        <div className="text-[#E5CEE4] font-bold text-2xl font-poppins">
          from the industry experts just in 18 weeks, from beginner to certified
        </div>
      </div>
      {/* <div className="flex flex-col">
        <ChatSvg></ChatSvg>

        <svg
          
          xmlns="http://www.w3.org/2000/svg"
          width="660"
          height="2"
          viewBox="0 0 660 2"
          fill="none"
        >
          <svg
            
            xmlns="http://www.w3.org/2000/svg"
            width="660"
            height="2"
            viewBox="0 0 660 2"
            fill="none"
          ></svg>
          <path opacity="0.1" d="M0 1H660" stroke="white" stroke-width="2" />
        </svg>
      </div> */}
      <div className="flex justify-center">
        <div className="flex border-r border-white pr-6">
        <UnderlyingSvg></UnderlyingSvg>
        <h4 className="text-white font-poppins font-semibold">Underlying Commitment</h4>

        </div>
        <div className="flex px-6">
        <UnderlyingSvg></UnderlyingSvg>
        <h4 className="text-white font-poppins font-semibold">Underlying Commitment</h4>

        </div>
        
        <div className="flex border-l border-white pl-6">
        <UnderlyingSvg></UnderlyingSvg>
        <h4 className="text-white font-poppins font-semibold ">Underlying Commitment</h4>

        </div>
        
        
        
      </div>
    </section>
  );
}
export default MainContent;
