// import React from 'react'; // seems really redundant to have to
// import this everywhere, need to look into for a fix
import React from 'react';
// import TeamPhoto from '../Assets/team-photo.JPG';
import TeamPhoto from '..//Assets/Team/HM10Team/Team2.webp';

import { Card } from '@mui/material';


export default function AboutHackMerced(){
    return(
        <div className="About-HM">
            <div className="About-HM-Container">
                <h2 className='About-HM-Title'>About HackMerced</h2>
                <div className="About-HM-Contents"> 
                    <Card className="About-HM-Desc">
                        <div className="About-HM-Text">HackMerced is a 36-hour hackathon hosted at the
                        University of California, Merced by an organization
                        comprised of UC Merced students and alumni. Students
                        from all schools and backgrounds, regardless of prior
                        experience in computer science, are invited to participate.
                        We aim to create a collaborative and interdisciplinary
                        environment that showcases the creativity and innovation
                        culminating in the San Joaquin Valley.
                        <br/><br/>
                        Celebrating 10 years of HackMerced! View our previous iterations here: <a href="https://archives.hackmerced.com/">HackMerced Archives</a>
                        </div>
                    </Card>
                    <img className='Team-photo' src={TeamPhoto} alt="HackMerced Team"/>
                </div>
            </div>
        </div>
    )
}