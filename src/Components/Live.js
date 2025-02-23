import React from 'react'
import HackMercedTower from '../Assets/HackMercedTower.png';

function Live(){
    return (
        <div className="MainPage">
            <div className="Main-text-background">
                <div className="Main-text">
                    <h1 className="Main-title">HackMerced X Is Now Live @ UC Merced</h1>
                    <p className="Main-subtitle">
                    Join us at HackMerced now from March 7th 5:00pm to March 9th 12:00pm!
                    <br/>
                    With your team create innovative projects,
                    <br/>
                    Explore our workshops, connect with like minded students, and win prizes!
                    <br />
                    <a href="https://hackmerced-x.devpost.com">HackMerced X Devpost Can Be Found Here</a>
                    </p>
                    <a className="registerButton2Stars" href="live.hackmerced.com"><button className="registerButton2">HackMerced X Live Page</button>
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
                    <br />

                    <img src={HackMercedTower} className='Main-hackmerced-tower' alt='HackMerced X Tower'/>
                    <p className="Main-footer">Have questions? Email <a className="Main-footerlink" href="mailto:general@hackmerced.com"> general@hackmerced.com <p className="emailEmoji"><span role="img" aria-label="email">📧</span></p></a></p>
                </div>
            </div>
        </div>
    );
}

export default Live;