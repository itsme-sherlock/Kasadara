// src/App.js

import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import WhatWillYouGet from './components/WhatWillYouGet/WhatWillYouGet';
// import WhyUS from './components/whyus/WhyUs';
import UpcomingBatches from './components/upcomingBatches/UpcomingBatches';
import CourseFee from './components/CourseFee/CourseFee';
import EighteenWeek from './components/EighteenWeeks/EighteenWeek';
import FaqSection from './components/FaqSection/FaqSection'
import { useState, useEffect,useRef } from "react";
import Footer from './components/Footer';
function App() {
  // conditional rendering with different displays
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("window.innerWidth "+ window.innerWidth);
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
  const navbarRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  // Calculate the height for the h-screen section
  useEffect(() => {
    const navbar = navbarRef.current;
    const navbarHeight = navbar ? navbar.offsetHeight : 0;   // Get the navbar height
    console.log("navbarHeight " + navbarHeight)
    
    const viewportHeight = window.innerHeight;
    console.log("viewportHeight " + viewportHeight)
    
    const sectionHeight = viewportHeight - navbarHeight;
    console.log("sectionHeight " + sectionHeight)

    setSectionHeight(sectionHeight);
    setNavbarHeight(navbarHeight); 
  }, []);
  return (
    <div>
      <NavBar navbarRef={navbarRef}  />
      <MainContent 
      windowWidth={windowWidth}
      sectionHeight={sectionHeight}
      navbarHeight={navbarHeight}/>
      <WhatWillYouGet sectionHeight={sectionHeight}/>
      {/* <WhyUS    /> */}
      <UpcomingBatches/>    
      <CourseFee/>
      <EighteenWeek windowWidth={windowWidth}/>
      <FaqSection></FaqSection>
      <Footer></Footer>
      

      
    </div>

  );
}

export default App;
