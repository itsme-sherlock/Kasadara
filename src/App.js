// src/App.js

import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import WhatWillYouGet from './components/WhatWillYouGet/WhatWillYouGet';
import WhyUS from './components/WhyUs';
import UpcomingBatches from './components/UpcomingBatches';
import CourseFee from './components/CourseFee/CourseFee';
import EighteenWeek from './components/EighteenWeeks/EighteenWeek';
import FaqSection from './components/FaqSection/FaqSection'
import { useState, useEffect } from "react";
function App() {
  // conditional rendering with different displays
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    // Attach an event listener to the window's resize event
    window.addEventListener("resize", handleResize);
    console.log("event listner attached");

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listner removed");
    };
  }, [windowWidth]);
  return (
    <div>
      <NavBar />
      <MainContent windowWidth={windowWidth}/>
      <WhatWillYouGet/>
      <WhyUS/>
      <UpcomingBatches/>
      <CourseFee/>
      <EighteenWeek windowWidth={windowWidth}/>
      <FaqSection></FaqSection>
      

      
    </div>

  );
}

export default App;
