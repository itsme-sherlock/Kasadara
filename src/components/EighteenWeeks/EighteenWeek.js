import React from "react";
import EighteenWeekCards from "./EighteenWeekCards";
import { MobileCard } from "./EighteenWeekCards";
function EighteenWeek({ windowWidth }) {
  console.log(windowWidth);
  const cardDetails = [
    {
      week: "Week 1",
      heading: "Warming Up",
      orderedList: [
        "Introduction -Ice breaking",
        "Science and Art of Design",
        "Know thy basics (UX-CX -UI)",
        "UX Laws - Deep dive session",
        "Design thinking - an intro",
        "Activity for the week",
      ],
    },
    {
      week: "Week 2",
      heading: "Know thy users",
      orderedList: [
        "Qualitative research methods",
        "Quantitative research methods",
        "Profiling",
        "Personas and scenarios",
        "Intros to Mapping - Empathy",
        "User Journey Affinity Mapping",
        "Activity & Exercise",
      ],
    },
    {
      week: "Week 3",
      heading: "Design for Business",
      orderedList: [
        "Innovations - Radical and Incremental",
        "Stake holder interview.",
        "Competitor analysis",
        "Aligning with business goals",
        "Product  (Vs) Service",
        "Activity for the week",
      ],
    },
    {
      week: "Week 4",
      heading: "UI fundamentals - 1",
      orderedList: [
        "Design laws & UX myths ",
        "Usability Criteria & Heuristics",
        "Constraints and Errors",
        "Affordance, signifiers and metaphors",
        "Psychology of designs - PET",
        "Colour Theories  & Schemes combination",
        "Accessible colors - intro",
      ],
    },
    {
      week: "pic",
      heading: "Know thy users",
      orderedList: [
        "Qualitative research methods",
        "Quantitative research methods",
        "Profiling",
        "Personas and scenarios",
        "Intros to Mapping - Empathy",
        "User Journey Affinity Mapping",
        "Activity & Exercise",
      ],
    },
    {
      week: "Week 5",
      heading: "UI fundamentals - 2",
      orderedList: [
        "UI Components",
        "Navigations types and usage pattern",
        "Design system",
        "Responsive design",
        "UI patterns & Inspiration",
        "Applying Accessibility in UI",
        "Activity and exercise",
      ],
    },
    {
      week: "Week 6",
      heading: "Laying out the plan",
      orderedList: [
        "Design thinking - Yes once again",
        "Double diamond",
        "Task analysis ",
        "Task flow and User flow",
        "IA & Navigation - How to??",
        "Rapid wire-framing",
        "Documenting low fidelity wireframes",
        "1:1 White board session",
        "Activity and exercise ",
      ],
    },
    {
      week: "Week 7",
      heading: "Tool - Figma",
      orderedList: [
        "The commonness in all",
        "Alignment Layers",
        "Design properties",
        "Export & Import",
        "Auto-layout ",
        "Components & Variables ",
        "Useful plugins",
        "Exercise and activity ",
      ],
    },
    {
      week: "Week 8",
      heading: "Know your first move",
      orderedList: [
        "Interaction Design",
        "Haptics",
        "Micro interactions",
        "UI Animations -RULES ",
        "Creating Design system with component libraries",
        "Creating Interface Designs",
        "Design your first interactions ",
      ],
    },
    {
      week: "Week 9",
      heading: "Getting intense",
      orderedList: [
        "Using smart animate and other tools to create prototype",
        "Prototyping",
        "Dev hands-off (assets & style guide",
      ],
    },
    {
      week: "Week 10",
      heading: "Into the world Android",
      orderedList: [
        "Introduction to Material design",
        "Understanding the pattern and layout",
        "Recreate 3 Android app using material kit",
        "1-0-1 Reviews",
      ],
    },
    {
      week: "Week 11",
      heading: "into the world of iOS",
      orderedList: [
        "Introduction to Human interface guidelines",
        "Understanding the pattern and layout",
        "Recreate 3 iOS app using latest HIG kit",
        "1-0-1 Reviews",
      ],
    },
    {
      week: "Week 12",
      heading: "Websites and App",
      orderedList: [
        "Introduction to fluent, windows ui and other design systems",
        "Responsive web design",
        "Application layout vs Web layout",
        "Recreate a website, windows app and an e-commerce site",
        "1-0-1 Reviews",
        "Accessibility and Inclusivit",
      ],
    },
    {
      week: "Week 13",
      heading: "sability testing",
      orderedList: [
        "Introduction to various Usability methods",
        "Usability testing - Preparation & Execution ",
        "Accessibility testing - tools & plugins",
      ],
    },
    {
      week: "Week 14",
      heading: "Usability testing-2",
      orderedList: [
        "Analysing and reporting the usability test findings - Framework",
        "Re-iterat",
      ],
    },
    {
      week: "pic",
      heading: "Know thy users",
      orderedList: [
        "Qualitative research methods",
        "Quantitative research methods",
        "Profiling",
        "Personas and scenarios",
        "Intros to Mapping - Empathy",
        "User Journey Affinity Mapping",
        "Activity & Exercise",
      ],
    },
    {
      week: "Week 2",
      heading: "Know thy users",
      orderedList: [
        "Qualitative research methods",
        "Quantitative research methods",
        "Profiling",
        "Personas and scenarios",
        "Intros to Mapping - Empathy",
        "User Journey Affinity Mapping",
        "Activity & Exercise",
      ],
    },
    {
      week: "Week 2",
      heading: "Know thy users",
      orderedList: [
        "Qualitative research methods",
        "Quantitative research methods",
        "Profiling",
        "Personas and scenarios",
        "Intros to Mapping - Empathy",
        "User Journey Affinity Mapping",
        "Activity & Exercise",
      ],
    },
    {
      week: "Week 2",
      heading: "Know thy users",
      orderedList: [
        "Qualitative research methods",
        "Quantitative research methods",
        "Profiling",
        "Personas and scenarios",
        "Intros to Mapping - Empathy",
        "User Journey Affinity Mapping",
        "Activity & Exercise",
      ],
    },
    {
      week: "Week 2",
      heading: "Know thy users",
      orderedList: [
        "Qualitative research methods",
        "Quantitative research methods",
        "Profiling",
        "Personas and scenarios",
        "Intros to Mapping - Empathy",
        "User Journey Affinity Mapping",
        "Activity & Exercise",
      ],
    },
  ];
  return (
    <section className="bg-[#F2F2F2]">
      <div className="sm:px-16 sm:py-20">
        {/* TextSection */}
        <div className="flex flex-col px-4 py-4 ">
          {/* Heaading */}
          <h1 className="custom-text-color text-[#B01873] font-poppins font-semibold text-4xl text-left sm:text-8xl">
            The 18 Week
          </h1>
          {/* subHeading */}
          <h4 className="text-[#B01873] py-4 font-poppins font-semibold text-base sm:text-2xl">
            Intense bootcamp{" "}
            <span className="custom-text-color font-poppins font-semibold text-base sm:text-2xl">
              to make you an assertive designer
            </span>
          </h4>
          {/* Paragraph Content */}
          <p className="custom-text-color text-sm sm:whitespace-nowrap text-left">
            The entire course will be held in weekend to make it feasible for
            working professionals and college students to attend.
            {windowWidth < 640 ? (
              <>
                <br></br>
                <br></br>
              </>
            ) : (
              <br></br>
            )}
            We are not rigid with the 18 week plan we are flexible enough to
            extend the duration depends on the students progress{" "}
          </p>
        </div>
        {/* Grid card section for large screens only */}
        <div className="py-2 ">
          <div className="hidden sm:grid grid-cols-4 gap-4 px-4">
            {cardDetails.map((card, index) => (
              <div className="" key={index}>
                <EighteenWeekCards
                  week={card.week}
                  heading={card.heading}
                  orderedList={card.orderedList}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Grid only for smaller screens */}
        <div className="flex flex-col items-center sm:hidden">
          <MobileCard
            week={"Week 1 - 4"}
            orderedList={[
              "Warming up",
              "Know thy users",
              "Design for business",
              "UI fundamentals - 1",
            ]}
          ></MobileCard>
          <MobileCard
            week={"Week 5 - 8"}
            orderedList={[
              "UI fundamentals - 2",
              "Laying out the plan",
              "Tool - Figma",
              "Know your first move",
            ]}
          ></MobileCard>
          <MobileCard
            week={"Week 9 - 12"}
            orderedList={[
              "Usability testing",
              "Into the world of android",
              "Into the world of iOS",
              "Websites and app",
            ]}
          ></MobileCard>
          <MobileCard
            week={"Week 13 - 16"}
            orderedList={[
              "Getting intense",
              "Usability testing - 2",
              "Warm up for the final showdown",
              "Final showdown",
            ]}
          ></MobileCard>
          <MobileCard
            week={"Week 17 - 18"}
            orderedList={["Get it done", "Placement training"]}
          ></MobileCard>
        </div>
        {/* Download Button */}
        <div className="flex justify-center py-4">
          <button className="pink-button font-poppins">
            Download Syllabus
          </button>
        </div>
      </div>
    </section>
  );
}
export default EighteenWeek;
