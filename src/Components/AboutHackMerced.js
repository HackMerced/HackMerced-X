import TeamPhoto from '../Assets/team-photo.JPG';
import { Card } from '@mui/material';
export default function AboutHackMerced(){
    return(
        <div className="About-HM">
            <div className="About-HM-Container">
                <h2 className='About-HM-Title'>about hackmerced</h2>
                <div className="About-HM-Contents">
                    <Card className="About-HM-Desc">
                        <div className="About-HM-Text">HackMerced is a 36-hour hackathon hosted at the
                        University of California, Merced by an organization
                        comprised of UC Merced students and alumni. Students
                        from all schools and backgrounds, regardless of prior
                        experience in computer science, are invited to participate.
                        We aim to create a collaborative and interdisciplinary
                        environment that showcases the creativity and innovation
                        culminating in the San Joaquin Valley.</div>
                        
                    </Card>
                    <img className='Team-photo' src={TeamPhoto}/>
                </div>
            </div>
        </div>
    )
}