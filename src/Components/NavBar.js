import { Link } from 'react-router-dom'; // import Link

function NavBar() {
    return (
      <div className="NavBar">
        <ul className="nav-items">
          <li><a href="/"><button className="button" id="sponsors-button">home</button></a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdsinPEX__G-Jr2kUgGIHNpwZyTA3VWYx4NPGU8X320Xa47rg/viewform"><button className="button" id="mentor-button">mentor</button></a></li>
          <li><Link to="/aboutus"><button className="button" id="about-us-button">about us</button></Link></li>
          <li><Link to="/contactus"><button className="button" id="contact-us-button">contact us</button></Link></li>
          <li><a href="https://live.hackmerced.com/"><button className="registerButton" id="register-button">live page</button></a></li>
        </ul>
            
      </div>
    );
  }
  
  export default NavBar;