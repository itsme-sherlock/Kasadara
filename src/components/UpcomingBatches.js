import React from "react";

import { ReactComponent as BatchDate } from "../Assets/UpcomingBatches/WholeCalenderSvg.svg";
import { ReactComponent as OtherCalenderSvg } from "../Assets/UpcomingBatches/OtherCalenderSvg.svg";
function UpcomingBatches() {
  return (
    <section>
      <div className="my-24 flex-col flex items-start pl-20  ">
        {/*section heading*/}
        <h1 className="text-black font-poppins font-extrabold text-4xl ">
          Upcoming Batches
        </h1>
        <div className="py-3"></div>
        {/*&nbsp to give sapce bteween*/}
        {/*sub heading*/}
        <p className="text-black font-poppins font-normal text-xl flex">
          The entire course will be held in weekend to make it&nbsp;
          <span className="text-black font-poppins font-normal text-xl">
            {" "}
            feasible for working professionals and college students to attend.
          </span>
        </p>
        <p className="text-[#84cfed] font-poppins font-normal text-xl"></p>
      </div>
      {/*calender*/}
      <div className="flex items-end pl-20">
        <div className="drop-shadow-2xl">
          <BatchDate></BatchDate>
        </div>
        <div className="drop-shadow-2xl">
          <BatchDate></BatchDate>
        </div>
        <div className="drop-shadow-2xl">
            <OtherCalenderSvg></OtherCalenderSvg>
        </div>
      </div>
    </section>
  );
}

export default UpcomingBatches;
