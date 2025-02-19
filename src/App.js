import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import HomePage from './Components/HomePage.js';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs.js';
import Footer from './Components/Footer.js';
import SponsorshipDeck from './Components/Sponsorship-Deck/SponsorshipDeck.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a class="mlh-banner" id="mlh-trust-badge" style={{display: "block", maxWidth: "100px", minWidth: "60px", position: "fixed", right: "50px", top: "0", width: "10%", zIndex: "10000"}} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black" target="_blank" rel="noopener noreferrer">
            <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg" alt="Major League Hacking 2025 Hackathon Season" style={{ width: "100%" }} />
          </a>
        </header>
        
        <NavBar/>
      
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/sponsorus" element={<SponsorshipDeck />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
