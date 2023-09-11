import React from "react";
import EighteenWeekCards from './EighteenWeekCards'
function EighteenWeek(){
    return(
        <section className="bg-[#F2F2F2]">
            {/* TextSection */}
        <div className="flex flex-col px-4 ">
            {/* Heaading */}
            <h1 className="custom-text-color text-[#591B76] font-poppins font-semibold text-8xl">The 18 Week</h1>
            {/* subHeading */}
            <h4 className="text-[#591B76] py-4 font-poppins font-semibold text-2xl">Intense bootcamp <span className="custom-text-color font-poppins font-semibold text-2xl">to make you an assertive designer</span></h4>
            {/* Paragraph Content */}
            <p className="custom-text-color text-left">The entire course will be held in weekend to make it feasible for working professionals and college students to attend. We are not rigid with the 18 week plan we are flexible enough to extend the duration depends on the students progress </p>
            
        </div>
        {/* Grid card section */}
        <div className="pt-14">
        
            <div className="grid grid-cols-4 gap-4 px-4">
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
        </section>
    );
}
 export default EighteenWeek; 