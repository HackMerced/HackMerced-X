import { Grid } from "@mui/material";
import Jet from '../Assets/Team/jet.JPG';
import Porfi from '../Assets/Team/porfi.JPG';
import Alisson from '../Assets/Team/alisson.JPG';
import Mo from '../Assets/Team/mo.JPG';
import Ivan from '../Assets/Team/ivan.jpg'
import Princess from '../Assets/Team/princess.jpeg';
import Emi from '../Assets/Team/emi.jpg'
import Noor from '../Assets/Team/noor.JPG'
import Shyam from '../Assets/Team/shyam.JPG';
import Akhil from '../Assets/Team/akhil.JPG';
import Rafael from '../Assets/Team/rafael.JPG';
import Laith from '../Assets/Team/laith.JPG';


function Team() {
    const teamMembers = [
        { name: 'Porfirio Montoya', imgSrc: Porfi },
        { name: 'Alisson Ross', imgSrc: Alisson },
        { name: 'Jet Lin', imgSrc: Jet },
        { name: 'Noor Irshad', imgSrc: Noor },
        { name: 'Mohamed Hasan', imgSrc: Mo },
        { name: 'Shyam Gupta', imgSrc: Shyam },
        { name: 'Akhil Devarasetty', imgSrc: Akhil },
        { name: 'Rafael Lastre', imgSrc: Rafael },
        { name: 'Laith Darras', imgSrc: Laith },
        { name: 'Ivan Piceno', imgSrc: Ivan },
        { name: 'Princess Thomas', imgSrc: Princess },
        { name: 'Emi Rueth', imgSrc: Emi },
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
                                <img className="Team-Img" src={teamMember.imgSrc} alt="Avatar" />
                                <div className="Team-Name">{teamMember.name}</div>
                            </Grid>
                        )
                    })}

                </Grid>
            </div>
        </div>
    );
} export default Team;