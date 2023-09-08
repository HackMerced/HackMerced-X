function NavBar() {
    return (
      <div className="NavBar">
        <ul className="nav-items">
          <li><a href="#team"><button className="button" id="team-button">team</button></a></li>
          <li><a href="#tracks"><button className="button" id="tracks-button">tracks</button></a></li>
          <li><a href="#faq"><button className="button" id="faq-button">faq</button></a></li>
          <li><a href="#sponsors"><button className="button" id="sponsors-button">sponsors</button></a></li>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdsinPEX__G-Jr2kUgGIHNpwZyTA3VWYx4NPGU8X320Xa47rg/viewform"><button className="button" id="mentor-button">mentor</button></a></li>
          <li><a href="https://docs.google.com/forms/d/1_A3jLqUO3d5hsv9MtMF358K0C2nntOpq_WYin2H1aKw/viewform"><button className="registerButton" id="register-button">register</button></a></li>
        </ul>
            
      </div>
    );
  }
  
  export default NavBar;