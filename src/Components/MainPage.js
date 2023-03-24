import Video from '../Assets/landing.mp4';
function MainPage() {
    return (
      <div className="MainPage">
         <video className='Main-video'
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline=""
              src={Video}/>

            <div className="Main-text">
                <h1 className="Main-title">hackmerced</h1>
                <p className="Main-subtitle">Now accepting new volunteers!</p>
                <p className="Main-sub2">applications open march 24 - april 7, 2023</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEoxNV8R0obJpRwBn70Pcdkx-HDzt3YkSzPcIEe427TKFu_w/viewform?usp=sf_link">
                  <button className="registerButton2">APPLY NOW</button>
                </a>
                <p className="Main-footer">Have questions? Email Porfirio Montoya at  <a className="Main-footerlink" href="mailto:email@ucmerced.edu"> pmontoya2@ucmerced.edu</a></p>
                
            </div>
      </div>
    );
  }
  
  export default MainPage;