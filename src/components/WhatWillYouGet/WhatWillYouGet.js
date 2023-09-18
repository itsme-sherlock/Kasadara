import React from "react";
import "./WhatWillYouGet.css";
import { ReactComponent as PassionateYouSvg } from "../../Assets/Section 2/Passionate you.svg";
import { ReactComponent as StrongSvg } from "../../Assets/Section 2/Strong and unmatched foundation in UX.svg";
import { ReactComponent as ArrowWeekJourney } from "../../Assets/Section 2/The 16 week journey.svg";
import { ReactComponent as ArrowWeekJourneyMobile } from "../../Assets/Section 2/16 week journey mobile.svg";
import { ReactComponent as BigArrow } from "../../Assets/Section 2/Big Arrow vector.svg";
import { Element } from "react-scroll";
import Card from "./WhatWillYouGetCard";

function WhatWillYouGet() {
  // An array of card data (you can replace this with your actual card data)
  // Define an array of card data with different styles and SVGs
  const cards = [
    {
      number: 1,
      heading: "",
      content:
        "",
      svg: <PassionateYouSvg/>,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 1,
      heading: "",
      content:
        "",
      svg: <ArrowWeekJourney />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 1,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: "Strong and unmatched foundation in UI UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <StrongSvg />,
      style: "", // Add Tailwind CSS classes for styling
    },
    // Add more card data here...
  ];

  return (
    <Element name="course-journey">
      <section className="h-screen max-h-screen ">
        <div className="mt-20 mx-20">
          {/* main heading and subheading */}
          <div className="">
            <h1 className="text-[#323232] font-poppins font-extrabold sm:text-4xl text-2xl">
              What you will get in
              <span className="text-[#B01873] font-poppins font-extrabold sm:text-4xl text-2xl">
                {" "}
                the 18 week
              </span>
            </h1>
          </div>
          {/* cards sction */}
          <div className="">
            {/*Passionate you Card (different card than other cards) */}
            {/* <div className="flex items-end">
              <PassionateYouSvg />
              <ArrowWeekJourney className="hidden sm:block" />
              <ArrowWeekJourneyMobile className="sm:hidden" />
            </div> */}
            <div className="md:grid  flex overflow-x-auto md:grid-cols-5 gap-4">
              {/* Generate cards from 1 to 12 */}
              {cards.map((card, index) => (
                <div  key={index}
                className={`p-4 ${card.style}`}>
                  <Card
                    number={card.number}
                    heading={card.heading}
                    content={card.content}
                    svg={card.svg}
                  />
                  (if(index === 0 ){
                    <BigArrow/>
                  }else{null})
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default WhatWillYouGet;
