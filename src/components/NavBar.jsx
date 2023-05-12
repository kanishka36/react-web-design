import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { links } from '../data';
import Logo from '../Images/logo3.png';
import './navBar.css'

function NavBar() {

    const [isMenuShowing, setIsMenuShowing] = useState(false);
  

  return (
    <nav>
        <div className={`container nav__container ${isMenuShowing ? 'nav__border':''}`}>
            <div className="nav__container-wrapper">
                <div className="nav__icon" onClick={()=> setIsMenuShowing(!isMenuShowing)}>
                    <div className="icon__lines">
                        <div className={`line-1 ${isMenuShowing ? 'is-line-1-rotate':''}`}></div>
                        <div className={`line-2 ${isMenuShowing ? 'is-line-show':''}`}></div>
                        <div className={`line-3 ${isMenuShowing ? 'is-line-show':''}`}></div>
                        <div className={`line-4 ${isMenuShowing ? 'is-line-4-rotate':''}`}></div>
                    </div>
                </div>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Nav Logo" />
                    </Link>
                </div>
            </div>
        </div>
        <div className={`nav__menu ${isMenuShowing ? '':'menu__show'}`}>
            <div className="nav__links">
                <div className="menu__wrapper">
                    <ul className='nav__links'>
                        {
                            links.map(({name, path},index)=> {
                                return (
                                    <li key={index}>
                                        <NavLink to={path}>{name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                
            </div>
        </div>
        
    </nav>
  )
}

export default NavBar