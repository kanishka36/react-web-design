import React from 'react'
import Footer_img from '../../Images/footer-img.png'
import CopyrightIcon from '@mui/icons-material/Copyright';
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer_contact-us-div">
        <div className="footer_top">
          <h1>Contact Us</h1>
        </div>
        <div className="footer_bottom">
          <div className="footer_left">
            <div className="footer_wrapper-link">
              <a href="/" className="footer_link">For a project</a>
            </div>
            <div className="footer_wrapper-link">
              <a href="/" className="footer_link">For work & practices</a>
            </div>
            <div className="footer_wrapper-link">
              <a href="/" className="footer_link">To offer professional services</a>
            </div>
          </div>
          <div className="footer_right">
            <h2>Sign up for our newsletter to stay up to date!</h2>
            <div className="footer_form">
              <form action="post">
                <input name="EMAIL" placeholder='Write your email' className="footer_email" />
                <div className="privacy_policy">
                  <div className="footer_checkbox-custom">
                    <input type="checkbox" name="privacy_policy" className="footer_checkbox"/>
                  </div>
                  <div className="footer_checkbox-acceptance-text">
                    <span>I accept the <a href="/">privacy policy</a></span> 
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_img-div">
        <img src={Footer_img} alt="footer-img" />
      </div>

      <div className="footer_contacts-div">
        <div className="footer_contacts">
          <div className="contacts-wrapper">
            <p>T. +94000444879</p>
            <p>Ca I'Alegre de Dalt 55, Baxios C 080064 -- Barcelona (Spain)</p>
            <a href="/">How to get there</a>
          </div>
        </div>

        <div className="footer_social-media">
          <div className="social-left">
            <a href="/" className="social-media">Linkedin</a>
            <a href="/" className="social-media">Twitter</a>
          </div>
          <div className="social-right">
            <a href="/" className="social-media">Behance</a>
            <a href="/" className="social-media">instagram</a>
          </div>
        </div>

        <div className="footer_copyrights">
          <a href="/" className="terms-contion">Terms & Conditions</a>
          <p className='copyrights'>
            <CopyrightIcon className='copyright-icon' sx={{ fontSize: 20 }}/>
            GRAVITY COLOMBO - All rights reserved
          </p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer

