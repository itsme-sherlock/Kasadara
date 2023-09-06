// src/App.js

import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import WhatWillYouGet from './components/WhatWillYouGet';
import WhyUS from './components/WhyUs';
import UpcomingBatches from './components/UpcomingBatches';
import CourseFee from './components/CourseFee/CourseFee';
function App() {
  return (
    <div>
      <NavBar />
      <MainContent/>
      <WhatWillYouGet/>
      <WhyUS/>
      <UpcomingBatches/>
      <CourseFee/>
      

      
    </div>

  );
}

export default App;
