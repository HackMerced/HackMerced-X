import { Grid } from "@mui/material";
import Jet from '../Assets/Team/jet.jpeg';
import Porfi from '../Assets/Team/porfi.jpeg';
import Alisson from '../Assets/Team/alisson.jpeg';
import David from '../Assets/Team/david.JPEG';
import Mo from '../Assets/Team/mo.jpeg';
function Team(){
    return(
        <div className='Team'>
            <div className="Team-container">
                <h2 className="title">our team</h2>
                <Grid container spacing={8} className="Team-Flex"
                    justifyContent="space-between">
                        <Grid item xs={3} className="Team-individual">
                            <img className="Team-Img" src={Porfi} alt="Avatar"/>
                            <div className="Team-Name">Porfirio Montoya</div> 
                        </Grid>
                        <Grid item xs={3} className="Team-individual">
                            <img className="Team-Img" src={Alisson} alt="Avatar"/>
                            <div className="Team-Name">Alisson Ross</div>
                        </Grid>
                        <Grid item xs={3} className="Team-individual">
                            <img className="Team-Img" src={David} alt="Avatar"/>
                            <div className="Team-Name">David Choi</div>
                       </Grid>
                       <Grid item xs={3} className="Team-individual">
                            <img className="Team-Img" src={Jet} alt="Avatar"/>
                            <div className="Team-Name">Jet Lin</div>
                        </Grid>
                        <Grid item xs={3} className="Team-individual">
                            <img className="Team-Img" src={Mo} alt="Avatar"/>
                            <div className="Team-Name">Mohamed Hasan</div>
                        </Grid>
                </Grid>
            </div>
        </div>
    );

}export default Team;