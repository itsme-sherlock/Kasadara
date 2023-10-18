import React from "react";
import { useRef } from "react";
import FaqVideoFrame from "./FaqVideoFrame";
import FaqAccordian from "./FaqAccordian";
import { ReactComponent as LeftArrow } from "../../Assets/Faq/Nav arrow left.svg";
import { ReactComponent as RightArrow } from "../../Assets/Faq/Navigation arrow right.svg";
import { Element } from "react-scroll";

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
      question: "What is Kasadara?",
      answer: "Kasadara is a specialized institute focused on UX UI design. We offer a comprehensive course that caters to both beginners and intermediates, providing the skills and knowledge needed to excel in the field of User Experience and User Interface design.",
    },
    {
      question: "Tell me about the course at Kasadara.",
      answer: "Our signature course is designed to cover a wide range of topics in UX UI design. It's suitable for both beginners and intermediates, providing a solid foundation and advanced knowledge over 18 weeks.",
    },
    {
      question: "How long do your courses typically last?",
      answer: "Our course spans 18 weeks, providing you with a thorough education in UX UI design. But if the students need some time to cope-up we can always extend. We are flexible with the course duration.",
    },
    {
      question: "Who are the instructors at Kasadara?",
      answer: "Our course instructors are industry experts with a minimum of 7+ years of experience in UX UI design. They bring real-world insights and practical knowledge to the classroom.We also bring guest lectures and juries from leading tech companies, providing students with diverse perspectives on the topic",
    },
    {
      question: "Do you offer placement support and networking opportunities?",
      answer: "Upon successfully completing our course, you will be awarded an industry-recognized certificate that demonstrates your proficiency in UX UI design, and a portfolio to showcase your skills to recruiters, making you the desirable candidate.",
    },
    {
      question: "Can I pay for the course in installments?",
      answer: "We offer a flexible payment option that allows you to pay for the course in two-month installments, making it easier for you to manage your finances",
    },
    {
      question: "Can I visit Kasadara's campus before enrolling?",
      answer: "Currently, our courses are offered online, and there's no need to visit a physical campus. You can access our course materials and resources from anywhere with an internet connection.",
    }, 
    {
      question: "How can I enroll in the Kasadara course?",
      answer: "Enrolling in our course is easy. Simply visit our website, choose the course, and follow the enrollment instructions provided. If you have any questions during the process, feel free to reach out to our admissions team for assistance.",
    },
  ]
  return (
    // parent Container
    <Element name= "FAQ">
      <div className="px-[2%] py-12 sm:px-[10%]">
        {/* text content */}
        <div>
          <h1 className="font-medium text-2xl sm:text-4xl py-8 text-center">
            Watch our free classes and case studies
          </h1>
        </div>
        {/* video Content and nav buttons */}
        <div className="flex flex-col gap-4 relative ">
          {/* videocontetn */}
          <div
            className="flex gap-4 overflow-x-auto sm:overflow-x-hidden"
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
            <div className="absolute top-[0.5rem] left-[-12px]">
              {/* left button */}
              <button className="" onClick={scrollLeft}>
                <LeftArrow></LeftArrow>
              </button>
            </div>
            {/* right buttons */}
            <div className="absolute top-[0.5rem] right-[-29px]">
              <button className="" onClick={scrollRight}>
                <RightArrow></RightArrow>
              </button>
            </div>
          </div>
        </div>
        
      </div>
      {/* Faq Accordian section */}
      <div className="px-[2%]  sm:px-[10%] sm:pb-24 bg-[#FAFAFA]">
          <div className="">
            {/* heading */}
            <h1 className="font-medium text-2xl sm:text-4xl pb-8 text-center">
              Frequently Asked Questions
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <div className="w-full flex flex-col gap-y-4">
                {faqContents.map((item,index)=>(
                  <FaqAccordian key={index} question={item.question} answer={item.answer}></FaqAccordian>
                ))}
              </div>
            </div>
          </div>
        </div>
    </Element>
  );
};
export default Faq;
