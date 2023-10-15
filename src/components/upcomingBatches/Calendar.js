import React from "react";
function Calendar({date,time}) {
  return (
    <div className="w-56 h-48 sm:w-72 sm:h-72 rounded-xl relative bg-white drop-shadow-2xl">
      {/* two horns */}
      <div className="absolute -top-7 -z-0 w-full">
        <div className="flex justify-around">
          <div className="h-9 w-7 theme-pink-horn rounded-lg"></div>
          <div className="h-9 w-7 theme-pink-horn rounded-lg"></div>
        </div>
      </div>
      {/* first pink element */}
      <div className="h-[25%] theme-pink-horn  relative rounded-t-xl z-20">
        <div className="flex justify-center items-center h-full gap-3">
          <div className="w-3 h-3 rounded-full bg-[#84ED9B]"></div>
          <p className="text-white font-poppins text-xs">ONLINE</p>
          <p className="text-white font-poppins text-xs">|</p>
          <p className="text-white font-poppins text-xs">Weekend</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[75%]">
        <p className="font-bold text-2xl sm:text-5xl font-poppins text-[#591B76] tracking-widest">{date}</p>
        <p className="font-medium text-xs sm:text-base font-poppins text-[#591B76] tracking-widest pb-6 ">{time}</p>
        <button className="bg-[#0F8C41] hover:bg-[#00692A;] text-white font-semibold px-4 py-2 rounded-md">Request a call back</button>
      </div>
    </div>
  );
}
export default Calendar;
