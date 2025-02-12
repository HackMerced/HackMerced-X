import React from 'react';
import HackMercedTower from '../Assets/HackMercedTower.png';


function MainPage() {
  // function scrollToHacktually() {
    // document.getElementById('hacktually').scrollIntoView({behavior: 'smooth', block:'end', alignToTop:false})
  // }
    return (
      <div className="MainPage">
            <div className="Main-text-background">
              <div className="Main-text">
                <h1 className="Main-title">HackMerced X @ UC Merced</h1>
                <p className="Main-subtitle">
                  Join us at HackMerced March 7th 5:00pm to March 9th 12:00pm!
                  <br/>
                  With your team create innovative projects,
                  <br/>
                  Explore our workshops, connect with like minded students, and win prizes!
                </p>
                <a className="registerButton2Stars" href="https://docs.google.com/forms/d/e/1FAIpQLSerxYTLPoERBERkjr63okZMrOGDU1Lgw1aOnjWGlhFOFXHN4w/viewform?usp=dialog">
                  <button className="registerButton2">Register Now!</button>
                  <div class="starWrapper">
                    <p class="star1" id="star">★</p>
                    <p class="star2" id="star">★</p>
                    <p class="star3" id="star">★</p>
                  </div>
                  <div class="starBursts">
                    <p class="starBurst1">✨</p>
                    <p class="starBurst2">⭐️</p>
                    <p class="starBurst3">🌟</p>
                  </div> 
                </a>

                <img src={HackMercedTower} className='Main-hackmerced-tower' alt='HackMerced X Tower'/>
                <p className="Main-footer">Have questions? Email <a className="Main-footerlink" href="mailto:general@hackmerced.com"> general@hackmerced.com <p className="emailEmoji"><span role="img" aria-label="email">📧</span></p></a></p>
                </div>
            </div>
      </div>
    );
  }
  
  export default MainPage;