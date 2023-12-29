import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tracks from './Components/Tracks.js';
import FAQ from './Components/FAQ.js'
import NavBar from './Components/NavBar.js';
import MainPage from './Components/MainPage.js';
import Sponsors from './Components/Sponsors.js';
import Footer from './Components/Footer.js';
import Team from './Components/Team.js';
import ContactUs from './Components/ContactUs.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        {/* <MainPage/> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Team/>
        <Tracks/>
        <FAQ/>
        <Sponsors/>
        <footer><Footer/></footer>
      </div>
    </Router>
  );
}

export default App;
