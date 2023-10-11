import React from "react";
import { useRef } from "react";
import FaqVideoFrame from "./FaqVideoFrame";
import FaqAccordian from "./FaqAccordian";
import { ReactComponent as LeftArrow } from "../../Assets/Faq/Nav arrow left.svg";
import { ReactComponent as RightArrow } from "../../Assets/Faq/Navigation arrow right.svg";

const Faq = () => {
  const scroller = useRef(null);
  const scrollLeft = () => {
    console.log(scroller.current);
    if (scroller.current) {
      const scrollAmount = -300; // Adjust the scroll amount as needed
      scroller.current.scrollTo({
        left: scroller.current.scrollLeft + scrollAmount,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }
  };
  const scrollRight = () => {
    console.log(scroller.current);
    if (scroller.current) {
      const scrollAmount = 300; // Adjust the scroll amount as needed
      scroller.current.scrollTo({
        left: scroller.current.scrollLeft + scrollAmount,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    }
  };
  const faqContents=[
    {
      question: "Is it an online Programme?",
      answer: "Yes, it is completely online...",
    },
    {
      question: "How is this learning programme different from other bootcamps?",
      answer: "This program is unique because...",
    },
    {
      question: "What is the minimum qualification required for the course?",
      answer: "To join this course, you need...",
    },
    {
      question: "Is this a full-time program?",
      answer: "No, this is not a full-time program...",
    },
  ]
  return (
    // parent Container
    <div className="sm:py-10">
      {/* text content */}
      <div>
        <h1 className="font-medium text-2xl font-poppins py-4  text-center">
          Watch our free classes and case studies
        </h1>
      </div>
      {/* video Content and nav buttons */}
      <div className="flex flex-col px-4 gap-4 relative ">
        {/* videocontetn */}
        <div
          className="flex px-4 gap-4 overflow-x-auto sm:overflow-x-hidden"
          style={{
            transform: "translateX(0)", // Initialize with 0 translation
          }}
          ref={scroller}
        >
          <FaqVideoFrame></FaqVideoFrame>
          <FaqVideoFrame></FaqVideoFrame>
          <FaqVideoFrame></FaqVideoFrame>
          <FaqVideoFrame></FaqVideoFrame>
          <FaqVideoFrame></FaqVideoFrame>
          <FaqVideoFrame></FaqVideoFrame>
        </div>
        {/* Navigation buttons */}
        <div className="hidden sm:block text-9xl text-[#7B115D] opacity-10 hover:opacity-100 transition-opacity">
          <div className="absolute top-0 left-0">
            {/* left button */}
            <button className="" onClick={scrollLeft}>
              <LeftArrow></LeftArrow>
            </button>
          </div>
          {/* right buttons */}
          <div className="absolute top-0 right-0">
            <button className="" onClick={scrollRight}>
              <RightArrow></RightArrow>
            </button>
          </div>
        </div>
      </div>
      {/* Faq Accordian section */}
      <div>
        <div>
          {/* heading */}
          <h1 className="font-semibold text-2xl sm:text-4xl py-8 text-center">
            FAQ
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-10">
            <div>
              {faqContents.map((item,index)=>(
                <FaqAccordian key={index} question={item.question} answer={item.answer}></FaqAccordian>
              ))}
            </div>
            <div>
              {faqContents.map((item,index)=>(
                <FaqAccordian key={index} question={item.question} answer={item.answer}></FaqAccordian>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
