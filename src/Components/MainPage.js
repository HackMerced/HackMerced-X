function MainPage() {
    return (
      <div className="MainPage">

            <div className="Main-text-background">
              <div className="Main-text">
                <h1 className="Main-title">HackMerced IX</h1>
                <p className="Main-subtitle">
                  Join us for the largest hackathon in the San Joaquin Valley
                  <br/>
                  March 8-10 2024 @ UC Merced
                </p>
               
                <a className="registerButton2Stars" href="https://docs.google.com/forms/d/e/1FAIpQLScZoaMgds1Ihb4j7VfD3NQQSOSvsBOuurg8Lz-hIB7Im71Lug/viewform">
                  <button className="registerButton2">Register Now</button>
                  
                  <div className="starWrapper">
                    <p className="star1" id="star">★</p>
                    <p className="star2" id="star">★</p>
                    <p className="star3" id="star">★</p>
                  </div>
                  <div className="starBursts">
                    <p className="starBurst1">✨</p>
                    <p className="starBurst2">⭐️</p>
                    <p className="starBurst3">🌟</p>
                  </div>
                 
                  
                </a>
                <p className="Main-footer">Have questions? Email <a className="Main-footerlink" href="mailto:general@hackmerced.com"> general@hackmerced.com <p className="emailEmoji">📧</p></a></p>
                </div>
            </div>
      </div>
    );
  }
  
  export default MainPage;