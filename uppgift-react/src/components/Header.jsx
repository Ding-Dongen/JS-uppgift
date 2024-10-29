import React from 'react'
import SiliconLogo from '../assets/images/icons/logo-navbar.svg'

const Header = () => {
  return (
    <section className="page-1">
            <div id="container-1" className="nav">
                
                <a id="logo" href="index.html"><img src={SiliconLogo} alt="Logo" /><span>Silicon</span></a>

                <nav id="main-menu" className="navbar" aria-label="Main Navigation">
                    <a className="nav-link" href="#container-3">Features</a>
                    <a className="nav-link" href="./contact.html">Contact</a>
                  </nav>

                <div id="darkmode-toogle-switch" className="btn-toogle-switch">
                  <span className="label">Dark mode</span>
                  <label className="switchs">
                    <input id="switch" type="checkbox" name="theme_switch" />
                    <span className="slider round"></span>
                  </label>
                </div>

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