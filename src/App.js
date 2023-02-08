
import './App.css';
import About from './Components/About.js';
import FAQ from './Components/FAQ.js'
import NavBar from './Components/NavBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <p>
          HackMerced VIII Page V.0.0
        </p>
      </header>
      <About/>
      <FAQ/>
      <footer></footer>
    </div>
  );
}

export default App;
