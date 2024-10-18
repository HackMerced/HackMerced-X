function MainPage() {
  // function scrollToHacktually() {
    // document.getElementById('hacktually').scrollIntoView({behavior: 'smooth', block:'end', alignToTop:false})
  // }
    return (
      <div className="MainPage">

            <div className="Main-text-background">
              <div className="Main-text">
                <h1 className="Main-title">Hacktually @ UC Merced</h1>
                <p className="Main-subtitle">
                  Join us at Hacktually on November 2nd!
                  <br/>
                  Learn from our workshops and connect with like-minded students and coders
                </p>
                <a className="registerButton2" href="./#hacktually">
                {/* <a className="registerButton2" onClick={scrollToHacktually()}> */}
                  <button className="registerButton2">Learn more</button>
                </a>
                <p className="Main-footer">Have questions? Email <a className="Main-footerlink" href="mailto:general@hackmerced.com"> general@hackmerced.com <p className="emailEmoji">📧</p></a></p>
                </div>
            </div>
      </div>
    );
  }
  
  export default MainPage;