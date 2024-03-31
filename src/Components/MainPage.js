function MainPage() {
    return (
      <div className="MainPage">

            <div className="Main-text-background">
              <div className="Main-text">
                <h1 className="Main-title">HackMerced X</h1>
                <p className="Main-subtitle">
                  Thank you for attending the largest hackathon in the San Joaquin Valley
                  <br/>
                  Coming Soon 2025 @ UC Merced
                </p>
                <p className="Main-subtitle">
                  Applications to join our team are Open!
                </p>
                  Apply Now to help make HackMerced X come to fruition!
                <a className="registerButton2Stars" href="https://docs.google.com/forms/d/e/1FAIpQLSd7K6NUy1IWhxdTOlP_40LQLvO-9S1cIRlE_KQlPj6xkFf3dg/viewform">
                  <button className="registerButton2">Apply Now!</button>
                  
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