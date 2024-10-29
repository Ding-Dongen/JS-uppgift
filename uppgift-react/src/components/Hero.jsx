import React from 'react'
import MainPic from '../assets/images/phones-tablet.svg'
import Logo from '../assets/images/icons8-google-play-store-24.svg'

const Hero = () => {
  return (
    <section className="section-2" aria-label="Download App overview">
          
          <div id="container-2" className="part-2 cont-2">
            
              <div className="h-1">
                
                <h1 id="head" className="headers">Manage All Your Money in One App</h1>
                
              </div>  
              <div className="head-par-1">
                <p className="p p-1">We offer you a new generation of the mobile
                  banking. Save, spend & manage money in your pocket.</p>
              </div>
              <div className="apple-google-btns">  
                <a className="btn-apple" href="https://www.apple.com/app-store/" target="_blank">
                  <i className="fa-brands fa-apple"></i>
                  <div className="text-container">
                    <span className="download">Download on the</span>
                    <span className="store">AppStore</span>
                  </div>  
                </a>
                <a className="btn-google" href="https://play.google.com/store/games?pli=1" target="_blank">
                  <img className="google-play" src={Logo} alt="Google play icon" />
                  <div className="text-container">
                    <span className="download">Get it on</span>
                    <span className="store">GooglePlay</span>
                </div>  
                </a>
              </div>
            

              
              <a href="#container-3" className="disc">
                <span className="discover-more">
                <i className="fa-solid fa-chevron-down"></i>
                </span>
                <span className="dc">Discover more</span>
              </a>
              

              <div id="pic" className="pic-tablet">
                <img src={MainPic} alt="Phones for tablet" />
              </div>
              
          </div>
        </section>
  )
}

export default Hero