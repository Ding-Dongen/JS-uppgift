import React from 'react'
import { Link } from 'react-router-dom'
import SiliconLogo from '../assets/images/icons/logo-navbar.svg'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <section className="page-1">
            <div id="container-1" className="nav">
                
                <Link id="logo" to="/"><img src={SiliconLogo} alt="Logo" /><span>Silicon</span></Link>

                <nav id="main-menu" className="navbar" aria-label="Main Navigation">
                    <a className="nav-link" href="#container-3">Features</a>
                    <a className="nav-link" href="./contact">Contact</a>
                  </nav>

                  <DarkModeSwitch />

                <a id="signin" href="#" className="btn-primary">
                  <i className="fa-regular fa-user"></i>
                  <span>Sign in / up</span>
                </a>

                <button className="btn-mobile">
                  <i className="fa-solid fa-bars"></i>
                </button>

            </div>
    </section>
  )
}

export default Header