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
      <div className=" bg-[#F2F2F2] py-5 sm:py-10">
        <div className=" my-6  text-center sm:text-left flex-col flex sm:items-start sm:pl-20  ">
          {/*Element heading*/} 
          <h1 className="text-black  font-poppins font-extrabold text-2xl sm:text-4xl ">
            Upcoming Batches
          </h1>
          <div className="py-3"></div>
          {/*&nbsp to give sapce bteween*/}
          {/*sub heading*/}
          <p className="text-black font-poppins font-normal text-xs sm:text-xl pb-10">
            The entire course will be held in weekend to make it&nbsp;
            <span className="text-black font-poppins font-normal text-xs sm:text-xl ">
              {" "}
              feasible for working professionals and <br></br> college students to attend.
            </span>
          </p>
          <p className="text-[#84cfed] font-poppins font-normal text-xs sm:text-xl"></p>
        </div>
        {/*calender*/}
        <div className="flex flex-col flex-wrap items-center justify-center sm:flex-row sm:gap-8 gap-14">
          {CalendarDetails.map((card, index) => (
            <div key={index} className="drop-shadow-2x">
              <Calender date={card.date} time={card.time} />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default UpcomingBatches;
