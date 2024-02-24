import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import HomePage from './Components/HomePage.js';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <a id="mlh-trust-badge" style={{'display':'block','max-width':'100px','min-width':'60px','position':'absolute','top':'0','width':'10%','z-index':'10000'}} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" alt="Major League Hacking 2024 Hackathon Season" style={{'width':'120%'}}/></a>
          <NavBar/>
        </header>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
