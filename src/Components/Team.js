import React from 'react';
import { Grid } from "@mui/material";
// import Jet from '../Assets/Team/jet.JPG';
// import Porfi from '../Assets/Team/porfi.JPG';
// import Alisson from '../Assets/Team/alisson.JPG';
// import Mo from '../Assets/Team/mo.JPG';
// import Princess from '../Assets/Team/princess.jpeg';
// import Noor from '../Assets/Team/noor.JPG'
// import Shyam from '../Assets/Team/shyam.JPG';
// import Akhil from '../Assets/Team/akhil.JPG';
// import Laith from '../Assets/Team/laith.JPG';
// import Lauren from '../Assets/Team/lauren.jpg';
// import Derek from '../Assets/Team/derek.JPG';

import Jet from '../Assets/Team/HM10Team/Jet.webp'
import Akhil from '../Assets/Team/HM10Team/akhil.JPG'
import Shyam from '../Assets/Team/HM10Team/shyam.JPG'
import Lauren from '../Assets/Team/HM10Team/lauren.jpg'
import Alisson from '../Assets/Team/HM10Team/Alisson.webp'
import Aaron from '../Assets/Team/HM10Team/Aaron.webp'
import Andre from '../Assets/Team/HM10Team/Andre.webp'
import Elaine from '../Assets/Team/HM10Team/Elaine.webp'
import Jeevan from '../Assets/Team/HM10Team/Jeevan.webp'
import Megan from '../Assets/Team/HM10Team/Megan.webp'
import Marian from '../Assets/Team/HM10Team/Marian.webp'
import AlexY from '../Assets/Team/HM10Team/Alex.webp'
import Brandon from '../Assets/Team/HM10Team/Brandon.webp'
import Drishya from '../Assets/Team/HM10Team/Drishya.webp'
import Ishan from '../Assets/Team/HM10Team/Ishan.webp'
import Isha from '../Assets/Team/HM10Team/Isha.webp'


function Team() {
    const teamMembers = [
        // { name: 'Porfirio Montoya', imgSrc: Porfi, linkedIn: "https://www.linkedin.com/in/porfirio_montoya_0x001" },
        // { name: 'Alisson Ross', imgSrc: Alisson, linkedIn: "https://www.linkedin.com/in/alisson-ross/"},
        // { name: 'Jet Lin', imgSrc: Jet, linkedIn: "https://www.linkedin.com/in/jet-lin-565952238/" },
        // { name: 'Noor Irshad', imgSrc: Noor, linkedIn: "https://www.linkedin.com/in/noorulainirshad/"},
        // { name: 'Mohamed Hasan', imgSrc: Mo, linkedIn: "https://www.linkedin.com/in/mohamed-hasan-4b850418a/"},
        // { name: 'Shyam Gupta', imgSrc: Shyam, linkedIn: "https://www.linkedin.com/in/shyam-gupta-626252260/" },
        // { name: 'Akhil Devarasetty', imgSrc: Akhil, linkedIn: "https://www.linkedin.com/in/akhil-devarasetty-073a72244/" },
        // { name: 'Laith Darras', imgSrc: Laith, linkedIn: "https://www.linkedin.com/in/laith-darras-52a407211/"},
        // { name: 'Princess Thomas', imgSrc: Princess, linkedIn:"https://www.linkedin.com/in/princess-thomas/" },
        // { name: 'Lauren Hur', imgSrc: Lauren, linkedIn:"https://www.linkedin.com/in/laurenhur" },
        // { name: 'Derek Stanford', imgSrc: Derek, linkedIn:"https://www.linkedin.com/in/derek-stanford/" },
        { name: 'Jet Lin', imgSrc: Jet, linkedIn: "https://www.linkedin.com/in/jet-lin-565952238/" },
        { name: 'Akhil Devarasetty', imgSrc: Akhil, linkedIn: "https://www.linkedin.com/in/akhil-devarasetty-073a72244/" },
        { name: 'Shyam Gupta', imgSrc: Shyam, linkedIn: "https://www.linkedin.com/in/shyam-gupta-626252260/" },
        { name: 'Alisson Ross', imgSrc: Alisson, linkedIn: "https://www.linkedin.com/in/alisson-ross/"},
        { name: 'Lauren Hur', imgSrc: Lauren, linkedIn:"https://www.linkedin.com/in/laurenhur" },
        { name: 'Aaron Dangc', imgSrc: Aaron, linkedIn: "https://github.com/adanglol" },
        { name: 'Andre Lew', imgSrc: Andre, linkedIn: "https://github.com/aelew" },
        { name: 'Elaine Wang', imgSrc: Elaine, linkedIn: "https://github.com/Yuanyunnnn" },
        { name: 'Jeevan Johnson', imgSrc: Jeevan, linkedIn: "https://github.com/jeevanjohnson" },
        { name: 'Megan Ciraulo', imgSrc: Megan, linkedIn: "https://github.com/mciraulo" },
        { name: 'Marian Zuniga', imgSrc: Marian, linkedIn: "https://github.com/mnzuniga" },
        { name: 'Alex Yanez', imgSrc: AlexY, linkedIn: "https://github.com/A13xYanez" },
        { name: 'Brandon Del Mundo', imgSrc: Brandon, linkedIn: "https://github.com/BrandonDelM" },
        { name: 'Drishya Sanghavi', imgSrc: Drishya, linkedIn: "https://github.com/drish678" },
        { name: 'Ishan Chawla', imgSrc: Ishan, linkedIn: "https://github.com/KooShnoo" },
        { name: 'Isha Mukherjee', imgSrc: Isha, linkedIn: "https://github.com/1004genre" },
    ]

    return (
        <div className='Team' id="team">
            <div className="Team-container">
                <h2 className="title">our team</h2>
                <Grid container spacing={8} className="Team-Flex"
                    justifyContent="start">

                    {teamMembers.map((teamMember, index) => {
                        return (
                            <Grid item xs={3} className="Team-individual" key={index}>
                                <a href={teamMember.linkedIn}><img className="Team-Img" src={teamMember.imgSrc} alt="Avatar" /></a>
                                <div className="Team-Name">{teamMember.name}</div>
                            </Grid>
                        )
                    })}

                </Grid>
            </div>
        </div>
    );
} export default Team;