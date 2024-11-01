import React from 'react';
import bronze from './assets/bronze-tier.png';
import silver from './assets/silver-tier.png';
import gold from './assets/gold-tier.png';
import platinum from './assets/platinum-tier.png';

const ThirdPage = () => {
    return (
        <section className='contain-third-page'>
            <h1>Sponsorship Options</h1>
            <div className='sponsor-tiers'>
                <img src={bronze} />
                <div className='tier-description'>
                    <h3>Bronze Tier ($500+)</h3>
                    <div className='tier-items'>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>Send Mentors</p></div>
                            <div className='text-background'><p>Thanked in Ceremonies</p></div>
                        </div>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>Sponsor a Prize</p></div>
                            <div className='text-background'><p>Distribute Merchandise</p></div>
                            <div className='text-background'><p>Logo on Website</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sponsor-tiers'>
                <img src={silver} />
                <div className='tier-description'>
                    <h3>Silver Tier ($1000+)</h3>
                    <div className='tier-items'>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>Judge a General Prize</p></div>
                            <div className='text-background'><p>Host a Workshop</p></div>
                        </div>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>Participant Info Post-Event</p></div>
                            <div className='text-background'><p>Send Recruiters</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sponsor-tiers'>
                <img src={gold} />
                <div className='tier-description'>
                    <h3>Gold Tier ($2500+)</h3>
                    <div className='tier-items'>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>5 Minute Presentation During Ceremonies</p></div>
                            <div className='text-background'><p>Onsite Interviews</p></div>
                        </div>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>Participant Info Pre-Event</p></div>
                            <div className='text-background'><p>Larger Logo On Website</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sponsor-tiers'>
                <img src={platinum} />
                <div className='tier-description'>
                    <h3>Platinum Tier ($4500+)</h3>
                    <div className='tier-items'>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>10 Minute Presentation During Ceremonies</p></div>
                        </div>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>Co-Branded On Website</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <span>If you have any questions regarding tiers and their benefits, please email general@hackmerced.com</span>
        </section>
    )
};

export default ThirdPage;