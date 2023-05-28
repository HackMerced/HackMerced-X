
import './App.css';
import Tracks from './Components/Tracks.js';
import FAQ from './Components/FAQ.js'
import NavBar from './Components/NavBar.js';
import MainPage from './Components/MainPage.js';
import Sponsors from './Components/Sponsors.js';
import Footer from './Components/Footer.js';
import Team from './Components/Team.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <MainPage/>
      <Team/>
      <Tracks/>
      <FAQ/>
      <Sponsors/>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
