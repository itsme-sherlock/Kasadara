import React from "react";
import "./WhatWillYouGet.css";
import { ReactComponent as PassionateYouSvg } from "../../Assets/Section 2/Passionates you.svg";
import { ReactComponent as PassionateYouSvgMobile } from "../../Assets/Section 2/PassionateM.svg";
import { ReactComponent as StrongSvg } from "../../Assets/Section 2/Stage 1.svg";
// import { ReactComponent as ArrowWeekJourney } from "../../Assets/Section 2/The 16 week journey.svg";
// import { ReactComponent as ArrowWeekJourneyMobile } from "../../Assets/Section 2/16 week journey mobile.svg";
import { ReactComponent as FromBeginner } from "../../Assets/Section 2/Stage 5.svg";
import { ReactComponent as GainABuisnessInsight } from "../../Assets/Section 2/Stage 2.svg";
import { ReactComponent as ReadyToFace } from "../../Assets/Section 2/Stage 3.svg";
import { ReactComponent as GoldenTicket } from "../../Assets/Section 2/Stage 7.svg";
import { ReactComponent as Portfolios } from "../../Assets/Section 2/Stage 4.svg";
import { ReactComponent as FinalShowDown } from "../../Assets/Section 2/Stage 6.svg";
import { ReactComponent as BigArrow } from "../../Assets/Section 2/Big Arrow vector.svg";
// import { ReactComponent as ArrowBetweenCards } from "../../Assets/Section 2/ArrowBetweenCards.svg";
import { Element } from "react-scroll";
import Card from "./WhatWillYouGetCard";

function WhatWillYouGet(props) {
  console.log("What will you get " + props.sectionHeight);
  // An array of card data (you can replace this with your actual card data)
  // Define an array of card data with different styles and SVGs
  const cards = [
    {
      number: -1,
      heading: "",
      content: "",
      svg: <PassionateYouSvg />,
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
      heading: "Gain a Business insights for effective UX",
      content:
        "We focus on solid foundation that gives our students  confidence and set them apart from competition.",
      svg: <GainABuisnessInsight />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 3,
      heading: "Ready to face the real world design challenges ",
      content:
        "We provide extensive training with numerous real-world activities to practice and apply the learnings  ",
      svg: <ReadyToFace />,
      style: "", // Add Tailwind CSS classes for styling
    },

    {
      number: 4,
      heading: "Portfolios & Case studies to prove proficiency ",
      content:
        "Our expert guide you in creating impressive portfolios that gives you an edge in the job market.",
      svg: <Portfolios />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 5,
      heading: "From beginner to certified",
      content:
        "Our comprehensive curriculum covers everything you need to know, from the basics to advanced techniques.",
      svg: <FromBeginner />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 6,
      heading: "Prepare you for the final showdown",
      content:
        "Placement training from career counsellors and engage in multi-level mock interviews with industry experts.",
      svg: <FinalShowDown />,
      style: "", // Add Tailwind CSS classes for styling
    },
    {
      number: 7,
      heading: "Golden ticket to the designer’s community ",
      content:
        "Connect with our supportive network for knowledge sharing, project collaboration, and mutual growth.",
      svg: <GoldenTicket />,
      style: "", // Add Tailwind CSS classes for styling
    },
    // Add more card data here...
  ];

  return (
    <Element name="course-journey" className="h-fit">
      <div className="flex flex-col px-[2%] py-12 sm:px-[15%] sm:py-24 ">
        {/* main heading and subheading */}
        <div className="w-full">
          <h1 className="text-[#323232] font-poppins font-extrabold sm:text-4xl text-2xl">
            What you will get in
            <span className="text-[#B01873] font-poppins font-extrabold sm:text-4xl text-2xl">
              {" "}
              the 18 week
            </span>
          </h1>
        </div>
        {/* cards sction large screen */}
        <div className="hidden xl:block xl:relative mt-28">
          <div className="flex justify-between gap-10 pb-12">
            {/* Generate cards for the first row */}
            {cards.map(
              (card, index) =>
                index < 4 && (
                  <div
                    key={index}
                    className={` ${card.style}`}
                  >
                    <Card
                      number={card.number}
                      heading={card.heading}
                      content={card.content}
                      svg={card.svg}
                    />
                  </div>
                )
            )}
          </div>
          <div className="h-0 absolute top-24 left-24">
            <BigArrow className="hidden"/>
          </div>
          <div className="flex overflow-x-auto gap-10 justify-center">
            {/* Generate cards for the second row */}
            {cards.map(
              (card, index) =>
                index > 3 && (
                  <div className="flex items-center">
                    <div key={index} className={`gap-12${card.style}`}>
                      <Card
                        number={card.number}
                        heading={card.heading}
                        content={card.content}
                        svg={card.svg}
                      />
                    </div>
                    {/* <ArrowBetweenCards
                      className={index === 8 ? "hidden" : "block"}
                    /> */}
                  </div>
                )
            )}
          </div>
        </div>
        {/* cards Elements mobile view */}
        <div className="my-8 flex flex-col xl:hidden px-4 py-5 ">
          <div className="flex items-end">
           <PassionateYouSvgMobile className="w-64 h-64"></PassionateYouSvgMobile>
          </div>
          <div className="my-8 flex overflow-x-auto gap-9 h-96">
            {/* Generate cards from 1 to 12 */}
            {cards.map(
              (card, index) =>
                index > 0 && (
                  <div
                    key={index}
                    className={`px-4 py-5 xl:p-4 ${card.style} ${index > 0 ? "gap-10" : ""}`}
                  >
                    <Card
                      number={card.number}
                      heading={card.heading}
                      content={card.content}
                      svg={card.svg}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default WhatWillYouGet;
