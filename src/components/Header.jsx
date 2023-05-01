import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../videos/header-video.mp4'
import './header.css'

function Header() {
  return (
    <header className='container'>
        <div className="header-container">
            <div className="header-left">
                    <h2>WE REWRITE<br/> THE RULES OF DIGITAL<br/> TRANSFORMATION</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt inventore atque natus, impedit aliquam est optio quasi.</p>
                    <button className='header-button'>
                    <Link to="/about" className='btn lg'>READ MORE</Link> 
                    </button> 
      
            </div>
            <div className="header-right">
                <div className="header-video">
                    <video autoPlay loop>
                        <source src={Video} type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>
            
    </header>
  )
}

export default Header