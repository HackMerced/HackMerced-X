import React from 'react';
import bronze from './assets/bronze-tier.png';

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
                            <div className='text-background'><p>Distribute Merch</p></div>
                            <div className='text-background'><p>Logo on Website</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sponsor-tiers'>
                <h3>Silver Tier</h3>
            </div>
            <div className='sponsor-tiers'>
                <h3>Gold Tier</h3>
            </div>
            <div className='sponsor-tiers'>
                <h3>Platinum Tier</h3>
            </div>
        </section>
    )
};

export default ThirdPage;