import React from 'react';
import { Link } from 'react-router-dom';
import HackMercedTower from './assets/hackmerced-tower.png';
import BackgroundBuildings from './assets/background-buildings.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const FirstPage = () => {
    return (
        <section className='contain-first-page'>
            <div className="first-page-box">
                <div className="contain-gradients">
                    <div className='gradient1' />
                    <div className='gradient2' />
                </div>
                <img src={HackMercedTower} className='hackmerced-tower' alt="hack merced tower" />
                <img src={BackgroundBuildings} className="background-buildings" alt="background buildings" />
            </div>

            <div className="first-page-box">
                <div className="contain-gradients">
                    <div className='gradient1' />
                    <div className='gradient3' />
                </div>
                <img src={BackgroundBuildings} className="background-buildings2" alt="background buildings" />
                <div className='text-contents'>
                    <a href='https://www.facebook.com/hackmerced' className='first-page-links'>
                        <div className='social-link first-page-link-1'>
                            <FaFacebookSquare className='socials-logo' />
                            <h2>HackMerced</h2>
                        </div>
                    </a>
                    <a href='https://x.com/hackmerced' className='first-page-links'>
                        <div className='social-link first-page-link-2'>
                            <FaSquareXTwitter className='socials-logo' />
                            <h2>@HackMerced</h2>
                        </div>
                    </a>
                    <a href='https://www.instagram.com/hackmerced/' className='first-page-links'>
                        <div className='social-link first-page-link-3'>
                            <FaSquareInstagram className='socials-logo' />
                            <h2>@HackMerced</h2>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default FirstPage;