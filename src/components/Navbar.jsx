import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import Logo from "../images/logo.png"
import { links} from "../data"
import './navbar.css'
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";




const Navbar = () => {

    const [isNavShowing, setIsNavShwing] = useState(false);


  return (
      <nav>
          <div className="container nav__container">
              <Link to="/" className='logo' onClick={()=>setIsNavShwing(false)}>
                  <img src={ Logo} alt="Nav Logo" />
              </Link>
              <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                  {
                      links.map(({ name, path }, index) => {
                          return (
                              <li key={index}>
                                  <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}
                                      onClick={() => setIsNavShwing(prev => !prev)} >{name}</NavLink>
                             </li>
                         ) 
                      })
                  }
              </ul>

              <button className="nav__toggle-btn" onClick={()=> setIsNavShwing(prev => !prev)} >
                  {
                    isNavShowing ? <MdOutlineClose /> : <FaBarsProgress /> 
                  }
              </button>
                  
          </div>
    </nav>
  )
}

export default Navbar;