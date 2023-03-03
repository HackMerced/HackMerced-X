import SponsorLogo from '../Assets/sponsor_logos.png';

function Sponsors() {
    return (
      <div className="Sponsors" id="sponsors">
        <h2 className ="Sponsors-title">sponsors</h2>
            <div className="Sponsors-Description">
                HackMerced is 100% run by student volunteers. Our events are only made possible through the support of our generous sponsors, whom enable the growth of technology in the San Joaquin Valley.   
            </div>
        <img className='Sponsors-Logo' src={SponsorLogo} alt="sponsors logos"/>
      </div>
    );
  }
  
  export default Sponsors;