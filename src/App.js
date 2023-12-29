import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import HomePage from './Components/HomePage.js';
import ContactUs from './Components/ContactUs.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <footer><Footer/></footer>
      </div>
    </Router>
  );
}

export default App;
