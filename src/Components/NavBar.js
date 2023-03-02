function NavBar() {
    return (
      <div className="NavBar">
        <ul className="nav-items">
          <li><a href="#tracks"><button className="button">tracks</button></a></li>
          <li><a href="#faq"><button className="button">faq</button></a></li>
          <li><a href="#sponsors"><button className="button">sponsors</button></a></li>
          <li><a href="https://forms.gle/mgBKuK3G9L6FsxsJ8"><button className="button">mentor</button></a></li>
          <li><a href="https://forms.gle/pmMz4zeeEsMD3Pc1A"><button className="registerButton">register</button></a></li>
        </ul>
            
      </div>
    );
  }
  
  export default NavBar;