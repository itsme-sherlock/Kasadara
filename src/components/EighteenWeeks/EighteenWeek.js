import React from "react";
import EighteenWeekCards from './EighteenWeekCards'
import { MobileCard } from "./EighteenWeekCards";
function EighteenWeek({windowWidth}){
   console.log(windowWidth);
    return(
        <section className="bg-[#F2F2F2]">
            {/* TextSection */}
        <div className="flex flex-col px-4 py-2 ">
            {/* Heaading */}
            <h1 className="custom-text-color text-[#B01873] font-poppins font-semibold text-4xl text-left sm:text-8xl">The 18 Week</h1>
            {/* subHeading */}
            <h4 className="text-[#B01873] py-4 font-poppins font-semibold text-base sm:text-2xl">Intense bootcamp <span className="custom-text-color font-poppins font-semibold text-base sm:text-2xl">to make you an assertive designer</span></h4>
            {/* Paragraph Content */}
            <p className="custom-text-color text-sm sm:whitespace-nowrap text-left">The entire course will be held in weekend to make it feasible for working professionals and college students to attend.{windowWidth<640 ?
            <><br></br><br></br></>:<br></br>
            }We are not rigid with the 18 week plan we are flexible enough to extend the duration depends on the students progress </p>
            
        </div>
        {/* Grid card section for large screens only */}
        <div className="py-2 ">
        
            <div className="hidden sm:grid grid-cols-4 gap-4 px-4">
      {/* First Row */}
      <div className="bg-gray-300"> <EighteenWeekCards
            week='Week 1' 
            heading='Warming Up'
            orderedList={["Introduction -Ice breaking", 
                "Science and Art of Design",
                "Know thy basics (UX-CX -UI)",
                "UX Laws - Deep dive session",
                "Design thinking - an intro",
                "Activity for the week"]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>

      {/* Second Row */}
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>

      {/* Third Row */}
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>

      {/* Fourth Row */}
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>

      {/* Fifth Row */}
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
      <div className="bg-gray-300"><EighteenWeekCards
            week='Week 2' 
            heading='Know thy users'
            orderedList={["Qualitative research methods", 
                "Quantitative research methods",
                ]}
            ></EighteenWeekCards></div>
    </div>
        </div>
        {/* Grid only for smaller screens */}
        <div className="flex flex-col items-center sm:hidden">
            <MobileCard
            week={'Week 1 - 4'}
            orderedList={['Warming up','Know thy users','Design for business','UI fundamentals - 1']}
            ></MobileCard>
            <MobileCard
            week={'Week 5 - 8'}
            orderedList={['UI fundamentals - 2','Laying out the plan','Tool - Figma','Know your first move']}
            ></MobileCard>
            <MobileCard
            week={'Week 9 - 12'}
            orderedList={['Usability testing','Into the world of android','Into the world of iOS','Websites and app']}
            ></MobileCard>
            <MobileCard
            week={'Week 13 - 16'}
            orderedList={['Getting intense','Usability testing - 2','Warm up for the final showdown','Final showdown']}
            ></MobileCard>
            <MobileCard
            week={'Week 17 - 18'}
            orderedList={['Get it done','Placement training']}
            ></MobileCard>
            

        </div>
        {/* Download Button */}
        <div className="flex justify-center py-4">
            <button className="pink-button font-poppins">Download Syllabus</button>
        </div>
        </section>
    );
}
 export default EighteenWeek; 