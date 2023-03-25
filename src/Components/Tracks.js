import { Card } from "@mui/material";
import Health from '../Assets/health.svg';
import AG from '../Assets/ag.svg';
import Business from '../Assets/bus.svg';
function Tracks() {
    return (
      <div className="Tracks" id="tracks">
           <h2 className ="Tracks-title">previous tracks</h2>
           <div className="Tracks-Flex">
            <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Health} alt="Health logo"/>
              <h1 className="Track-Name">health & wellness</h1>
                <div className='Track-Text'>
                Develop a technology that supports physical or mental healthcare, healthcare administration, or the promotion of healthy livelihoods. Address widespread concerns in health technology or support everyday wellbeing.
                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={AG} alt="AG logo"/>
              <h1 className="Track-Name">agriculture</h1>
                <div className='Track-Text'>
                Participate in the VISTA Farms Food Future Innovate Track to become the next AgTech innovator. Create a project to make technology in agriculture more efficient, sustainable, and safer using the power of data-driven technologies.
                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
                <br/>
              <img className='Track-Logo' src={Business} alt="Business logo"/>
              <h1 className="Track-Name">business & finance</h1>
                <div className='Track-Text'>
                Support the growth of technology in the San Joaquin Valley by creating tech solutions for businesses - or starting your own! Increase the accessibility of financial services, financial or investment advisory, and financial literacy.
                </div>
              </Card>
           </div>
            
      </div>
    );
  }
  
  export default Tracks;