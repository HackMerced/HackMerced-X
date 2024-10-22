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
                <a className="registerButton2Stars" href="./#hacktually">
                  <button className="registerButton2">Learn more</button>
                  {/* <div class="starWrapper">
                    <p class="star1" id="star">★</p>
                    <p class="star2" id="star">★</p>
                    <p class="star3" id="star">★</p>
                  </div>
                  <div class="starBursts">
                    <p class="starBurst1">✨</p>
                    <p class="starBurst2">⭐️</p>
                    <p class="starBurst3">🌟</p>
                  </div> */}
                </a>
                <p className="Main-footer">Have questions? Email <a className="Main-footerlink" href="mailto:general@hackmerced.com"> general@hackmerced.com <p className="emailEmoji">📧</p></a></p>
                </div>
            </div>
      </div>
    );
  }
  
  export default MainPage;