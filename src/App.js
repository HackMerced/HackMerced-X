import './App.css';
import { BrowserRouter as HashRouter, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './Components/NavBar.js';
import HomePage from './Components/HomePage.js';
import ContactUs from './Components/ContactUs.js';
import Footer from './Components/Footer.js';

function DiscordRedirect() {
  useEffect(() => {
    window.location.href = 'https://discord.com/invite/E5GsRt3jPs';
  }, []);

  return null;
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/discord" element={<DiscordRedirect />} />

        </Routes>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
