import React from "react";

function Card({number,heading ,content,svg}){

    return(
        
        <div className="w-44 h-64 xl:w-72 xl:h-80">
            {/* Card number */}
            <div className="bg-[#B01873] hidden sm:bg-transparent w-6 h-6  justify-center rounded-full text-white">{number}</div>
            {/* SVG */}
            {svg}
            {/* Heading of the card */}
            <p className="text-sm font-poppins font-extrabold py-6 text-gray-800">
                {heading}
              
            </p>
            {/* content of the card */}
            <p className="text-xs mt-2 font-poppins text-gray-700">
                {content}
              
            </p>
          </div>
    );
}
export default Card;