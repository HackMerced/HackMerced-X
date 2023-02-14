import { Card } from "@mui/material";
import Support from '../Assets/support_1.svg'
function Tracks() {
    return (
      <div className="Tracks" id="tracks">
           <h2 className ="Tracks-title">tracks</h2>
           <div className="Tracks-Flex">
            <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Support} alt="Support logo"/>
              <h1 className="Track-Name">Coming soon</h1>
                <div className='Track-Text'>
                Stay tuned to learn more about our prize tracks for this year.
                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Support} alt="Support logo"/>
              <h1 className="Track-Name">Coming soon</h1>
                <div className='Track-Text'>
                Stay tuned to learn more about our prize tracks for this year.
                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Support} alt="Support logo"/>
              <h1 className="Track-Name">Coming soon</h1>
                <div className='Track-Text'>
                Stay tuned to learn more about our prize tracks for this year.
                </div>
              </Card>
           </div>
            
      </div>
    );
  }
  
  export default Tracks;