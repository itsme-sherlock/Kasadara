import React from "react";

import { ReactComponent as BatchDate } from "../Assets/UpcomingBatches/WholeCalenderSvg.svg";
import { ReactComponent as OtherCalenderSvg } from "../Assets/UpcomingBatches/OtherCalenderSvg.svg";
function UpcomingBatches() {
  return (
    <section>
      <div className=" my-6 sm:my-24 text-center sm:text-left flex-col flex sm:items-start sm:pl-20  ">
        {/*section heading*/}
        <h1 className="text-black  font-poppins font-extrabold text-2xl sm:text-4xl ">
          Upcoming Batches
        </h1>
        <div className="py-3"></div>
        {/*&nbsp to give sapce bteween*/}
        {/*sub heading*/}
        <p className="text-black font-poppins font-normal text-xs sm:text-xl">
          The entire course will be held in weekend to make it&nbsp;
          <span className="text-black font-poppins font-normal text-xs sm:text-xl">
            {" "}
            feasible for working professionals and college students to attend.
          </span>
        </p>
        <p className="text-[#84cfed] font-poppins font-normal text-xs sm:text-xl"></p>
      </div>
      {/*calender*/}
      <div className="flex flex-col items-center sm:flex-row">
        <div className="drop-shadow-2xl">
          <BatchDate className="sm:w-[281px] sm:h-[301px] w-[218px] h-[188px]"></BatchDate>
        </div>
        <div className="drop-shadow-2xl">
          <BatchDate className="sm:w-[281px] sm:h-[301px] w-[218px] h-[188px]"></BatchDate>
        </div>
        <div className="drop-shadow-2xl hidden sm:flex">
            <OtherCalenderSvg className="sm:w-[281px] sm:h-[301px] w-[218px] h-[188px]"></OtherCalenderSvg>
        </div>
      </div>
    </section>
  );
}

export default UpcomingBatches;
