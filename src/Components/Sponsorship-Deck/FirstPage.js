import React from 'react';
import HackMercedTower from './assets/hackmerced-tower.png';
import BackgroundBuildings from './assets/background-buildings.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const FirstPage = () => {
    return (
        <section className='contain-first-page'>
            <div className="first-page--box">
                <div className="contain-gradients">
                    <div className='gradient1' />
                    <div className='gradient2' />
                </div>
                <img src={HackMercedTower} className='hackmerced-tower' alt="hack merced tower" />
                <img src={BackgroundBuildings} className="background-buildings" alt="background buildings" />
            </div>
            <div className="first-page--box">
                <div className="contain-gradients">
                    <div className='gradient1' />
                    <div className='gradient2' />
                </div>
                <img src={BackgroundBuildings} className="background-buildings2" alt="background buildings" />
                <div className='text-contents'>
                    <div className='social-link'>
                        <FaFacebookSquare className='socials-logo' />
                        <h2>HackMerced</h2>
                    </div>
                    <div className='social-link'>
                        <FaSquareXTwitter className='socials-logo' />
                        <h2>@HackMerced</h2>
                    </div>
                    <div className='social-link'>
                        <FaSquareInstagram className='socials-logo' />
                        <h2>@HackMerced</h2>
                    </div>
                    
                </div>
            </div>
        </section>
    )
};

export default FirstPage;