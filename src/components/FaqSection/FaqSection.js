import React from "react";
import FaqVideoFrame from './FaqVideoFrame'
import FaqAccordian from "./FaqAccordian";
const Faq = () => {
  // const accordionItems=[
  //   {title:'Item 1',content:'Content for Item 1'},
  //   {title:'Item 2',content:'Content for Item 2'},
  // ]
  return (
    // parent Container
    <div>
      {/* text content */}
      <div>
        <h1 className="font-medium text-2xl font-poppins py-4  text-center">
          Watch our free classes and case studies
        </h1>
      </div>
      {/* video Content */}
      <div className="flex sm:grid sm:grid-cols-3 px-4 gap-4 overflow-x-auto ">
        <FaqVideoFrame></FaqVideoFrame>
        <FaqVideoFrame></FaqVideoFrame>
        <FaqVideoFrame></FaqVideoFrame>
        <FaqVideoFrame></FaqVideoFrame>
        <FaqVideoFrame></FaqVideoFrame>
        <FaqVideoFrame></FaqVideoFrame>
      </div>
      {/* Faq Accordian section */}
      <div>
        <div >
          {/* heading */}
          <h1 className="font-semibold text-2xl sm:text-4xl py-8 text-center">FAQ</h1>
        </div>
        <FaqAccordian
        question={'Is it an online Programme?'}
        answer={'Yes it is completely online and physical classes will be started soon as far as of now classes will be online and will be taken in google meet'}
        ></FaqAccordian>
        <FaqAccordian
        question={'How is this learning programme different from other bootcamps?'}
        answer={'Yes it is completely online and physical classes will be started soon as far as of now classes will be online and will be taken in google meet'}
        ></FaqAccordian>
        <FaqAccordian
        question={'What is the minimum qualification required for the course?'}
        answer={'Yes it is completely online and physical classes will be started soon as far as of now classes will be online and will be taken in google meet'}
        ></FaqAccordian>
        <FaqAccordian
        question={'Is this a full time progamme'}
        answer={'Yes it is completely online and physical classes will be started soon as far as of now classes will be online and will be taken in google meet'}
        ></FaqAccordian>
        <FaqAccordian
        question={'Is it an online Programme?'}
        answer={'Yes it is completely online and physical classes will be started soon as far as of now classes will be online and will be taken in google meet'}
        ></FaqAccordian>
      </div>
    </div>
  );
};
export default Faq;
