import React from 'react';

const ThirdPage = () => {
    return (
        <section className='contain-third-page'>
            <h1>Sponsorship Options</h1>
            <div className='sponsor-tiers'>
                <h3>Bronze Tier</h3>
                <div className='tier-items'>
                    <p>Send Mentors</p>
                    <p>Thanked in Ceremonies</p>
                    <p>Sponsor a Prize</p>
                    <p>Distribute Merch</p>
                    <p>Logo on Website</p>
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