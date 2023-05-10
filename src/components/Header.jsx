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
              <h1>CUSTOM SOFTWARE <br/>& WEB DEVELOPMENT <br/>TO FUEL YOUR GROWTH</h1>
              <Link to='/about'>Read More</Link>
          </div>
      </header>
    </>

  )
}

export default Header