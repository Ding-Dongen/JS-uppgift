import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SiliconLogo from '../assets/images/icons/logo-navbar.svg'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }
  

  return (
    <section className="page-1">
            <div id="container-1" className="nav">
                
                <Link id="logo" to="/"><img src={SiliconLogo} alt="Logo" /><span>Silicon</span></Link>

                  <nav id="main-menu" className="navbar" aria-label="Main Navigation">
                    <NavLink className="nav-link" to="#container-3">Features</NavLink>
                    <NavLink className="nav-link" to="./contact">Contact</NavLink>
                  </nav>

                  <DarkModeSwitch />

                <a id="signin" href="#" className="btn-primary">
                  <i className="fa-regular fa-user"></i>
                  <span>Sign in / up</span>
                </a>

                <button className="btn-mobile" onClick={toggleMenu}>
                  <i className="fa-solid fa-bars"></i>
                </button>

                {showMenu && (
                    <div className="mobile-menu-overlay" onClick={toggleMenu}>
                        <nav className="mobile-menu">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="#container-3">Features</NavLink>
                            <NavLink className="nav-link" to="./contact">Contact</NavLink>
                        </nav>
                    </div>
                )}

            </div>
    </section>
  )
}

export default Header