import React from 'react';
import MainPage from './MainPage.js';
import Team from './Team.js';
import Tracks from './Tracks.js';
import FAQ from './FAQ.js';
import Sponsors from './Sponsors.js';
import Footer from './Footer.js';

function HomePage() {
  return (
    <div>
      <MainPage/>
      <Team/>
      <Tracks/>
      <FAQ/>
      <Sponsors/>
      <footer><Footer/></footer>
    </div>
  );
}

export default HomePage;