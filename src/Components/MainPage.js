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
                <p className="Main-subtitle">
                  Registrations are now closed
                  <br/>
                  Meet us in the opening ceremony 5pm @COB1 102
                </p>
               
                <a className="registerButton2Stars" href=" https://maps.app.goo.gl/UVBGhR5W1F3gQNeU7">
                  <button className="registerButton2">Show me where</button>
                  
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