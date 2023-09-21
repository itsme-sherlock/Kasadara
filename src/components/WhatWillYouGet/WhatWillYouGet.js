import React from "react";
import "./WhatWillYouGet.css";
import { ReactComponent as PassionateYouSvg } from "../../Assets/Section 2/Passionate you.svg";
import { ReactComponent as StrongSvg } from "../../Assets/Section 2/Strong and unmatched foundation in UX.svg";
import { ReactComponent as ArrowWeekJourney } from "../../Assets/Section 2/The 16 week journey.svg";
import { ReactComponent as ArrowWeekJourneyMobile } from "../../Assets/Section 2/16 week journey mobile.svg";
import { ReactComponent as FromBeginner } from "../../Assets/Section 2/From beginner to certified.svg";
import { ReactComponent as GainABuisnessInsight } from "../../Assets/Section 2/Gain a Business insights for effective UX .svg";
import { ReactComponent as GoldenTicket } from "../../Assets/Section 2/Golden ticket to the designers community.svg";
import { ReactComponent as Portfolios } from "../../Assets/Section 2/Portfolios and case studies.svg";
import { ReactComponent as FinalShowDown } from "../../Assets/Section 2/Prepare you for the final showdown.svg";
import { ReactComponent as BigArrow } from "../../Assets/Section 2/Big Arrow vector.svg";
import { ReactComponent as ArrowBetweenCards } from "../../Assets/Section 2/ArrowBetweenCards.svg";
import { Element } from "react-scroll";
import Card from "./WhatWillYouGetCard";

function WhatWillYouGet(props) {
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
      number: 0,
      heading: "",
      content: "",
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
      svg: <StrongSvg />,
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
    <Element name="course-journey"
    style={{
      height:`${props.sectionHeight}px`,
    }}>
      <section className="border-2 border-black mb-10 ">
        <div className="mx-4 my-8 sm:mt-20 sm:mx-20 "
        >
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
          {/* cards sction large screen */}
          <div className="hidden sm:relative lg:block">
            {/*Passionate you Card (different card than other cards) */}
            {/* <div className="flex items-end">
              <PassionateYouSvg />
              <ArrowWeekJourney className="hidden sm:block" />
              <ArrowWeekJourneyMobile className="sm:hidden" />
            </div> */}
            <div className="flex">
              {/* Generate cards from 1 to 12 */}
              {cards.map(
                (card, index) =>
                  index < 5 && (
                    <div
                      key={index}
                      className={`p-4 ${card.style} ${
                        index > 0 ? "gap-10" : ""
                      }`}
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
            <div className="h-0 absolute top-24 left-0">
              <BigArrow className="hidden lg:block" />
            </div>
            <div className="flex overflow-x-auto gap-10 justify-center">
              {/* Generate cards from 1 to 12 */}
              {cards.map(
                (card, index) =>
                  index > 4 && (
                    <div className="flex items-center">
                      <div key={index} className={`p-4 ${card.style}`}>
                        <Card
                          number={card.number}
                          heading={card.heading}
                          content={card.content}
                          svg={card.svg}
                        />
                      </div>
                      <ArrowBetweenCards className={index === 8 ? 'hidden' : 'block'} />
                    </div>
                  )
              )}
            </div>
          </div>
          {/* cards section mobile view */}
          <div className="my-8 lg:hidden  ">
            <div className="flex items-end">
              <PassionateYouSvg></PassionateYouSvg>
              <ArrowWeekJourneyMobile></ArrowWeekJourneyMobile>
            </div>
            <div className="my-8 flex overflow-x-auto">
              {/* Generate cards from 1 to 12 */}
              {cards.map(
                (card, index) =>
                  index > 1 && (
                    <div
                      key={index}
                      className={`p-4 ${card.style} ${
                        index > 0 ? "gap-10" : ""
                      }`}
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
      </section>
    </Element>
  );
}

export default WhatWillYouGet;
