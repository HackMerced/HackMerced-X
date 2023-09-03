import { Grid } from "@mui/material";
import Jet from '../Assets/Team/jet.jpeg';
import Porfi from '../Assets/Team/porfi.jpeg';
import Alisson from '../Assets/Team/alisson.jpeg';
import David from '../Assets/Team/david.JPEG';
import Mo from '../Assets/Team/mo.jpeg';
import Ivan from '../Assets/Team/ivan.jpg'
import Princess from '../Assets/Team/princess.jpeg';
import Emi from '../Assets/Team/emi.jpg'

function Team() {
    const teamMembers = [
        { name: 'Porfirio Montoya', imgSrc: Porfi },
        { name: 'Alisson Ross', imgSrc: Alisson },
        { name: 'David Choi', imgSrc: David },
        { name: 'Jet Lin', imgSrc: Jet },
        { name: 'Mohamed Hasan', imgSrc: Mo },
        { name: 'Ivan Piceno', imgSrc: Ivan },
        { name: 'Princess Thomas', imgSrc: Princess },
        { name: 'Emi Rueth', imgSrc: Emi }
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