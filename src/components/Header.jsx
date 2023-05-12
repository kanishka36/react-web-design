import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../videos/blue-sky.mp4'
import './header.css'

function Header() {
  return (
    <>
      <header>
          <video autoPlay loop>
              <source src={Video} type='video/mp4'/>
          </video>
          <div className="text__container">
              <h1>WE MAKE BRANDS LOOK GOOD</h1>
              <h2>DIGITAL FIRST MOBILE FRIENDLY AND FUTURE READY</h2>
              <div className="discription">
                <div className="left">
                  <p>At Centrick, we believe good design is good business. Both for us and the brands we partner with. Hey! Don't take our word for it. Research by Adobe proves that companies with strong design fundamentals outperform others by 219% on the S&P index. The reason is that humans have an attractiveness bias and believe beautiful things are always better, even if they are not.</p>
                </div>
                <div className="right">
                  <p>That is why at Centrick, we hero brands, businesses, corporates and everything else in-between, making them look good, while being discovered, coveted, relished and shared by the people that matter. Because it pays to look good. Doesn’t it?</p>
                </div>
              </div>
              <Link to='/about'>Read More</Link>
          </div>
      </header>
    </>

  )
}

export default Header