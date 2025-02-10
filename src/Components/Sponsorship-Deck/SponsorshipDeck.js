import React from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import './SponsorshipDeck.css';
import Sponsors from '../Sponsors';

const SponsorshipDeck = () => {
    return (
        <>
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <Sponsors />
        </>
    )
};

export default SponsorshipDeck;