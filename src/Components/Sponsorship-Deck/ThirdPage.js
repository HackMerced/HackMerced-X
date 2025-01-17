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
                <h3 className='tier-h3'>Bronze Tier ($500+)</h3>
                <div className='tier-container'>
                    <img src={bronze} alt='bronze-tier-icon' />
                    <div className='tier-description'>
                        <div className='tier-items'>
                            <ul>
                                <li>
                                    Send Mentors to our Hackathon
                                </li>
                                <li>
                                    Thanked in Ceremonies
                                </li>
                                <li>
                                    Sponsor a Prize
                                </li>
                                <li>
                                    Distribute your Merch
                                </li>
                                <li>
                                    Logo on Website
                                </li>
                            </ul>
                            {/* <div className='tier-items-row'>
                            <div className='text-background'><p>Send Mentors</p></div>
                            <div className='text-background'><p>Thanked in Ceremonies</p></div>
                        </div>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>Sponsor a Prize</p></div>
                            <div className='text-background'><p>Distribute Merchandise</p></div>
                            <div className='text-background'><p>Logo on Website</p></div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='sponsor-tiers'>
                <h3 className='tier-h3'>Silver Tier ($1000+)</h3>
                <div className='tier-container'>
                    <img src={silver} alt='silver-tier-icon' />
                    <div className='tier-description'>
                        <div className='tier-items'>
                            <ul>
                                <li>
                                    Become a Judge for a General Prize
                                </li>
                                <li>
                                    Host a Workshop
                                </li>
                                <li>
                                    Access Participant info (emails, resumes, etc) Post-Event
                                </li>
                                <li>
                                    Send Recruiters to our Hackathon
                                </li>
                            </ul>
                            {/* <div className='tier-items-row'>
                            <div className='text-background'><p>Judge a General Prize</p></div>
                            <div className='text-background'><p>Host a Workshop</p></div>
                        </div>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>Participant Info Post-Event</p></div>
                            <div className='text-background'><p>Send Recruiters</p></div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='sponsor-tiers'>
                <h3 className='tier-h3'>Gold Tier ($2500+)</h3>
                <div className='tier-container'>
                    <img src={gold} alt='gold-tier-icon' />
                    <div className='tier-description'>
                        <div className='tier-items'>
                            <ul>
                                <li>
                                    5 Minute Presentation During Ceremonies
                                </li>
                                <li>
                                    Conduct Onsite Interviews with Participants
                                </li>
                                <li>
                                    Access Participant info (emails, resumes, etc) Pre-Event
                                </li>
                                <li>
                                    Larger Logo on Website
                                </li>
                            </ul>
                            {/* <div className='tier-items-row'>
                                <div className='text-background'><p>5 Minute Presentation During Ceremonies</p></div>
                                <div className='text-background'><p>Onsite Interviews</p></div>
                            </div>
                            <div className='tier-items-row'>
                                <div className='text-background'><p>Participant Info Pre-Event</p></div>
                                <div className='text-background'><p>Larger Logo On Website</p></div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
            <div className='sponsor-tiers'>
                <h3 className='tier-h3'>Platinum Tier ($4500+)</h3>
                <div className='tier-container'>
                    <img src={platinum} alt='platinum-tier-icon' />
                    <div className='tier-description'>
                        <div className='tier-items'>
                            <ul>
                                <li>
                                    10 Minute Presentation During Ceremonies
                                </li>
                                <li>
                                    Co-Branded on Website
                                </li>
                            </ul>
                            {/* <div className='tier-items-row'>
                            <div className='text-background'><p>10 Minute Presentation During Ceremonies</p></div>
                        </div>
                        <div className='tier-items-row'>
                            <div className='text-background'><p>Co-Branded On Website</p></div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <span className='third-page-footer'>If you have any questions regarding tiers and their benefits, please email <a href='mailto:sponsors@hackmerced.com'>sponsors@hackmerced.com</a></span>
        </section>
    )
};

export default ThirdPage;