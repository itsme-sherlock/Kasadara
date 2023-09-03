// src/App.js

import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import WhatWillYouGet from './components/WhatWillYouGet';
import WhyUS from './components/WhyUs';
import UpcomingBatches from './components/UpcomingBatches';
function App() {
  return (
    <div>
      <NavBar />
      <MainContent/>
      <WhatWillYouGet/>
      <WhyUS/>
      <UpcomingBatches/>
      

      
    </div>

  );
}

export default App;
