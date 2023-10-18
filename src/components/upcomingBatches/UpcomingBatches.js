import React from "react";
import "../WhatWillYouGet/WhatWillYouGet.css";
import Calender from "./Calendar";
import { Element } from "react-scroll";
function UpcomingBatches() {
  const CalendarDetails = [
    {
      date: "SEP 10",
      time: "10 am - 2 pm",
    },
    {
      date: "OCT 10",
      time: "10 am - 2 pm",
    },
    {
      date: "NOV 10",
      time: "10 am - 2 pm",
    },
    {
      date: "DEC 10",
      time: "10 am - 2 pm",
    },
  ];
  return (
    <Element name='Upcoming Batch'>
      <div className=" bg-[#F2F2F2] px-[2%] py-12 sm:px-[10%] sm:py-24">
        <div className=" text-center sm:text-left flex-col flex sm:items-start   ">
          {/*Element heading*/} 
          <h1 className="text-black  font-poppins font-extrabold text-2xl sm:text-4xl ">
            Upcoming Batches
          </h1>
          <div className="py-3"></div>
          {/*&nbsp to give sapce bteween*/}
          {/*sub heading*/}
          <p className="text-black font-poppins text-xs sm:text-lg pb-10">
            The entire course will be held in weekend to make it&nbsp;
            <span className="text-black font-poppins text-xs sm:text-lg ">
              {" "}
              feasible for working professionals and <br></br> college students to attend.
            </span>
          </p>
          <p className="text-[#84cfed] font-poppins font-normal text-xs sm:text-lg"></p>
        </div>
        {/*calender*/}
        <div className="flex flex-col flex-wrap items-center  sm:flex-row sm:gap-8 gap-7 pt-12">
          {CalendarDetails.map((card, index) => (
            <div key={index} className="drop-shadow-2x py-4">
              <Calender date={card.date} time={card.time} />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default UpcomingBatches;
