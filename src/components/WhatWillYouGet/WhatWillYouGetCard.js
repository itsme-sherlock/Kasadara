import React from "react";

function Card({number,heading ,content,svg}){

    return(
        
        <div className="p-4 w-52">
            {/* Card number */}
            <div className="bg-[#B01873] hidden sm:bg-transparent w-6 h-6  justify-center rounded-full text-white">{number}</div>
            {/* SVG */}
            {svg}
            {/* Heading of the card */}
            <p className="text-sm font-poppins font-extrabold">
                {heading}
              
            </p>
            {/* content of the card */}
            <p className="text-xs mt-2 font-poppins">
                {content}
              
            </p>
          </div>
    );
}
export default Card;