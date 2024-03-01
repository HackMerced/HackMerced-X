import { Card } from "@mui/material";
import Question from '../Assets/question.svg'
function Tracks() {
    return (
      <div className="Tracks" id="tracks">
            <h2 className ="Tracks-title">tracks</h2>
           <div className="Tracks-Flex">
            <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Question} alt="Mystery logo"/>
              <h1 className="Track-Name">mystery track</h1>
                <div className='Track-Text'>
                Join the opening ceremony to find out about our upcoming tracks!
                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Question} alt="Mystery logo"/>
              <h1 className="Track-Name">mystery track</h1>
                <div className='Track-Text'>
                Join the opening ceremony to find out about our upcoming tracks!
                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Question} alt="Mystery logo"/>
              <h1 className="Track-Name">mystery track</h1>
                <div className='Track-Text'>
                Join the opening ceremony to find out about our upcoming tracks!
                </div>
              </Card>
           </div>
            
      </div>
    );
  }
  
  export default Tracks;