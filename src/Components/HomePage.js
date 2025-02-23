import React from 'react';
import MainPage from './MainPage.js';
import Tracks from './Tracks.js';
import FAQ from './FAQ.js';
import Live from './Live.js'
// import Hacktually from './Hacktually.js';
import Sponsors from './Sponsors.js';

function HomePage() {
  return (
    <div>
      <Live/>
      {/* <Hacktually/> */}
      <Tracks/>
      <FAQ/>
      <Sponsors/>
    </div>
  );
}

export default HomePage;