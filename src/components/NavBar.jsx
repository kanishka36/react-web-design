import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { links } from '../data';
import Logo from '../Images/logo2.png';
import {GoThreeBars} from 'react-icons/go';
import './navBar.css'

function NavBar() {
  return (
    <nav>
        <div className="container nav__container">
            <div className="nav__container-wrapper">
                <div className="nav__icon">
                    
                </div>
            </div>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className="nav__links">
                {
                    links.map(({name,path},index)=>{
                        return(
                            <li>
                                <NavLink to={path} key={index}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

            
        </div>
    </nav>
  )
}

export default NavBar