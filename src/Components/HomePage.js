import React from 'react';
import MainPage from './MainPage.js';
import Tracks from './Tracks.js';
import FAQ from './FAQ.js';
// import Hacktually from './Hacktually.js';
import Sponsors from './Sponsors.js';

function HomePage() {
  return (
    <div>
      <MainPage/>
      {/* <Hacktually/> */}
      <Tracks/>
      <FAQ/>
      <Sponsors/>
    </div>
  );
}

export default HomePage;