// src/App.js

import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import WhatWillYouGet from './components/WhatWillYouGet/WhatWillYouGet';
import WhyUS from './components/WhyUs';
import UpcomingBatches from './components/UpcomingBatches';
import CourseFee from './components/CourseFee/CourseFee';
import EighteenWeek from './components/EighteenWeeks/EighteenWeek';
function App() {
  return (
    <div>
      <NavBar />
      <MainContent/>
      <WhatWillYouGet/>
      <WhyUS/>
      <UpcomingBatches/>
      <CourseFee/>
      <EighteenWeek/>
      

      
    </div>

  );
}

export default App;
