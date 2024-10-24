import React from 'react';
import HackMercedTower from './assets/hackmerced-tower.png';
import BackgroundBuildings from './assets/background-buildings.png';

const FirstPage = () => {
    return (
        <section className='contain-first-page'>
            <div className="first-page--left-side">
                <div className="contain-gradients">
                    <div className='gradient1' />
                    <div className='gradient2' />
                </div>
                <img src={HackMercedTower} className='hackmerced-tower' alt="hack merced tower" />
                <img src={BackgroundBuildings} className="background-buildings" alt="background buildings" />
            </div>
            <div className="first-page--right-side">

            </div>
        </section>
    )
};

export default FirstPage;