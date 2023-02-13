import { Card } from "@mui/material";
import Support from '../Assets/support_1.svg'
function Tracks() {
    return (
      <div className="Tracks">
           <h1 style={{marginTop: '0px'}}>Tracks</h1>
           <div className="Tracks-Flex">
            <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Support} alt="Support logo"/>
              <h1 className="Track-Name">Coming soon</h1>
                <div className='Track-Text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae est semper, semper velit at, elementum mauris. Maecenas vel molestie magna. Praesent malesuada lacinia nibh ut fringilla. Morbi sed urna ac lectus eleifend pellentesque. Maecenas vel fringilla tellus. Etiam non massa sit amet velit semper placerat efficitur vel dolor. In turpis lectus, ultricies quis pellentesque et, malesuada ac nunc. Integer maximus elit et bibendum tristique. Fusce quam nunc, aliquet sed lectus ut, eleifend volutpat est. In venenatis a quam et tincidunt. Maecenas velit dui, maximus vel urna in, faucibus ultrices velit. Proin sit amet quam mi. Sed ut massa id velit dignissim ultricies ut id ante.
                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Support} alt="Support logo"/>
              <h1 className="Track-Name">Coming soon</h1>
                <div className='Track-Text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae est semper, semper velit at, elementum mauris. Maecenas vel molestie magna. Praesent malesuada lacinia nibh ut fringilla. Morbi sed urna ac lectus eleifend pellentesque. Maecenas vel fringilla tellus. Etiam non massa sit amet velit semper placerat efficitur vel dolor. In turpis lectus, ultricies quis pellentesque et, malesuada ac nunc. Integer maximus elit et bibendum tristique. Fusce quam nunc, aliquet sed lectus ut, eleifend volutpat est. In venenatis a quam et tincidunt. Maecenas velit dui, maximus vel urna in, faucibus ultrices velit. Proin sit amet quam mi. Sed ut massa id velit dignissim ultricies ut id ante.
                </div>
              </Card>
              <Card style={{borderRadius: '30px'}} className='Track-Card'>
              <img className='Track-Logo' src={Support} alt="Support logo"/>
              <h1 className="Track-Name">Coming soon</h1>
                <div className='Track-Text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae est semper, semper velit at, elementum mauris. Maecenas vel molestie magna. Praesent malesuada lacinia nibh ut fringilla. Morbi sed urna ac lectus eleifend pellentesque. Maecenas vel fringilla tellus. Etiam non massa sit amet velit semper placerat efficitur vel dolor. In turpis lectus, ultricies quis pellentesque et, malesuada ac nunc. Integer maximus elit et bibendum tristique. Fusce quam nunc, aliquet sed lectus ut, eleifend volutpat est. In venenatis a quam et tincidunt. Maecenas velit dui, maximus vel urna in, faucibus ultrices velit. Proin sit amet quam mi. Sed ut massa id velit dignissim ultricies ut id ante.
                </div>
              </Card>
           </div>
            
      </div>
    );
  }
  
  export default Tracks;