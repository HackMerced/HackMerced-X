import { Card } from "@mui/material";
import Question from '../Assets/question.svg';
import AG from '../Assets/ag.png';
import Health from '../Assets/health.png';
import VR from '../Assets/vr.png';
function Tracks() {
    return (
      <div className="Tracks" id="tracks">
            <h2 className ="Tracks-title">tracks</h2>
           <div className="Tracks-Flex">
            <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={AG} alt="AgTech"/>
              <h1 className="Track-Name">AgTech</h1>
                <div className='Track-Text'>
                The world needs innovative solutions to feed a growing population with sustainable practices. AgTech is where technology meets agriculture, tackling challenges like resource scarcity, climate change, and food insecurity. By joining this hackathon track, you'll be at the forefront of creating solutions that can boost yields, optimize resource use, and improve farm management. Hacks in this track can be anything AgTech related.

                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Health} alt="Health"/>
              <h1 className="Track-Name">Health for Social Good</h1>
                <div className='Track-Text'>
                Join our Health for Social Good track and make a real impact on global health disparities. Millions face barriers to essential healthcare due to poverty, geography, or discrimination. Your hacks can address these challenges and more, helping people better manage their health and access vital services.
                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={VR} alt="Mystery logo"/>
              <h1 className="Track-Name">Spatial & Interactivity</h1>
                <div className='Track-Text'>
                It's important that the technology we make today is interactive and inclusive to all. Things that you can see and touch make a long lasting effect to all of us and drives us to where we are today. Hacks in this track are projects that focus on interactivity and spatial technologies. This ranges from GIS, AR/VR, games, and much more. Explore the endless possibilities of these technologies and shape the experiences that engage people!
                </div>
              </Card>
           </div>
            
      </div>
    );
  }
  
  export default Tracks;