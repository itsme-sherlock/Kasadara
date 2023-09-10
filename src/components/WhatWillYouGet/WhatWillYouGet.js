import React from "react";
import "./WhatWillYouGet.css";
import { ReactComponent as PassionateYouSvg } from "../../Assets/Section 2/Passionate you.svg";
import { ReactComponent as StrongSvg } from "../../Assets/Section 2/Strong and unmatched foundation in UX.svg";
import { Element } from "react-scroll";
import Card from './WhatWillYouGetCard';

function WhatWillYouGet() {
  // An array of card data (you can replace this with your actual card data)
   // Define an array of card data with different styles and SVGs
   const cards = [
  
    {
      number: 1,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    {
      number: 2,
      heading: 'Strong and unmatched foundation in UI UX',
      content: 'We focus on solid foundation that gives our students  confidence and set them apart from competition.',
      svg: <StrongSvg/>,
      style: '', // Add Tailwind CSS classes for styling
    },
    // Add more card data here...
  ];
  

  return (
    <Element name="course-journey">
        <section className="m-0">
      <div className="my-16 ml-4 w-full">
        <h1 className="text-[#323232] w-full font-poppins font-extrabold sm:text-4xl text-2xl pr-5">
          What you will get in<span className="text-[#B01873] font-poppins font-extrabold sm:text-4xl text-2xl"> the 18 week
          </span>
        </h1>
      </div>
      
        <div className="mx-16">
          {/*Passionate you Card (different card than other cards) */}
          <div>
            <PassionateYouSvg/>
          </div>
        <div className="md:grid  flex overflow-x-auto md:grid-cols-4 gap-4">
        {/* Generate cards from 1 to 12 */}
        {cards.map((card, index) => (
        <div key={index} className={`p-4 ${card.style}`}>
        <Card
          number={card.number}
          heading={card.heading}
          content={card.content}
          svg={card.svg}
        />
      </div>
        ))}
          </div>
          

        
        
      </div>
    </section> 
    </Element>

    
  );
}

export default WhatWillYouGet;
