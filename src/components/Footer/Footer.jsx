import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="map">
        <iframe className="gmap_iframe" title="Google Maps" src="https://maps.google.com/maps?width=771&amp;height=416&amp;hl=en&amp;q=Piliyandala&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>

      <div className="footer__container">
        <div className="left">
          <h1>GRAVITY COLOMBO</h1>
          <div className="comm-text">
            <h4>We collaborate with</h4>
          </div>
          <div className="bottom">
            <div className="comm-data">
              <img src="" alt="logo" />
              <p className="comm-text">To make the offline world just as good-looking as the online.</p>
            </div>
            <div className="comm-data">
              <img src="" alt="logo" />
              <p className="comm-text">Because analytics, insights and performance should look just as good.</p>
            </div>
          </div>
          
        </div>

        <div className="right">
          <p className='underline comm-text'>Let’s chat. We have so much more to show you. Trust us, it’s the best one hour you’ll invest in a solid future with Centrick.</p>
          <div className="email">
            <p className='comm-text'>Email:</p>
            <a className='comm-text' href="/">roy@gravitycolombo.in</a>
            <a className='comm-text' href="/">anamata@gravitycolombo.in</a>
          </div>
        </div>
      </div>
      <div className="copyright__container">
        
      </div>
    </footer>
  )
}

export default Footer

