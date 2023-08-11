function NavBar() {
    return (
      <div className="NavBar">
        <ul className="nav-items">
          <li><a href="#team"><button className="button" id="team-button">team</button></a></li>
          <li><a href="#tracks"><button className="button" id="tracks-button">tracks</button></a></li>
          <li><a href="#faq"><button className="button" id="faq-button">faq</button></a></li>
          <li><a href="#sponsors"><button className="button" id="sponsors-button">sponsors</button></a></li>
          <li><a href="https://forms.gle/mgBKuK3G9L6FsxsJ8"><button className="button" id="mentor-button">mentor</button></a></li>
          <li><a href="https://forms.gle/pmMz4zeeEsMD3Pc1A"><button className="registerButton" id="register-button">register</button></a></li>
        </ul>
            
      </div>
    );
  }
  
  export default NavBar;