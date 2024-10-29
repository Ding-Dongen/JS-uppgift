import React, {useState} from 'react'
import Logo1 from '../assets/images/logo-1-desktop-tablet.svg'
import Logo2 from '../assets/images/logo-2-desktop-tablet.svg'
import Logo3 from '../assets/images/logo-3-desktop-tablet.svg'
import Logo4 from '../assets/images/logo-4-desktop-tablet.svg'
import Logo5 from '../assets/images/logo-5-only-desktop.svg'
import Logo6 from '../assets/images/logo-6-only-desktop.svg'

import Mask from '../assets/images/iphone12-Mask.svg'
import MaskInfo from '../assets/images/iphone12-mask-info.svg'
import MaskCard from '../assets/images/iphone12-mask-card.svg'

import Payment from '../assets/images/icons/icon-payments.svg'
import Security from '../assets/images/icons/icon-security.svg'
import Statistics from '../assets/images/icons/icon-statistics.svg'
import Support from '../assets/images/icons/icon-support.svg'
import Cashback from '../assets/images/icons/icon-cashback.svg'
import Standard from '../assets/images/icons/icon-standard.svg'


const FeaturesSection = () => {

  return (
    <section className="section-3" aria-label="Features Overview">

            <div id="container-3" className="part-3 ">

            <div className="wrapper-logos">
                <div className="logo-desktop-tablet">
                  <img src={Logo1} alt="First logo is called logo" />
                </div>
                <div className="logo-desktop-tablet">
                  <img src={Logo2} alt="Second logo is called logoipsum" />
                </div>
                <div className="logo-desktop-tablet">  
                  <img src={Logo3} alt="Third logo is called Logoipsum with solid and transparent letters" />
                </div>
                <div className="logo-desktop-tablet">  
                  <img src={Logo4} alt="Fourth logo is called logoipsum with solid letters" />
                </div>
                <div className="logo-desktop-tablet" id="desktop-only1">  
                  <img src={Logo5} alt="Fifth logo is for desktop only with solid letters" />
                </div>
                <div className="logo-desktop-tablet" id="desktop-only2">  
                  <img src={Logo6} alt="Sixth logo for desktop only with solid letters" />
                </div>  
              </div>

            
              <div className="phone-features">
                <img src={Mask} alt="One part of the three images, frame" className="image1" />
                <img src={MaskInfo} alt="Secon part, information in the phone" className="image2" />
                <img src={MaskCard} alt="Third part, credit card" className="image3" />
              </div>
              
              <div className="head-paragraph-features">
                <h1 className="header-features">App Features</h1>
                <p className="paragraph-features">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin volutpat mollis egestas.
                  Nam luctus facilisis ultrices. Pellentesque
                  volutpat ligula est. Mattis fermentum, at nec
                  lacus.</p>
              </div>
              <div className="parent-logo-text">
                  
                  <div className="logo-text">
                      <div className="payments position-text-pic">  
                        <img src={Payment} alt="payment logo" />
                        <div className="sub-head-paragraphs">  
                          <h3 className="h2-1">Easy Payments</h3>
                          <p className="p-4">Id mollis consectetur congue egestas
                            egestas suspendisse blandit justo.</p>
                        </div>  
                      </div>
                  </div>   
                  
                  <div className="logo-texer">
                      <div className="security position-text-pic">
                        <img className="security" src={Security} alt="security logo" />
                        <div className="sub-head-paragraphs">
                          <h3 className="h2-2">Data Security</h3>
                          <p className="p-5">Augue pulvinar justo, fermentum
                            fames aliquam accumsan vestibulum
                            non.</p>
                        </div> 
                      </div>
                  </div>
                  
                  <div className="logo-text">
                    <div className="security position-text-pic">
                          <img src={Statistics} alt="statistics logo" />
                      <div className="sub-head-paragraphs">    
                          <h3 className="h2-3">Cost Statistics</h3>
                          <p className="p-6">Mattis urna ultricies non amet, purus
                            in auctor non. Odio vulputate ac nibh.</p>
                      </div>
                    </div>
                  </div>  
                  
                  <div className="logo-text">
                    <div className="security position-text-pic">
                          <img src={Support} alt="Support logo" />
                      <div className="sub-head-paragraphs">    
                          <h3 className="h2-4">Support 24/7</h3>
                          <p className="p-7">A elementum, imperdiet enim, pretium
                            etiam facilisi in aenean quam mauris.</p>
                      </div>
                    </div>        
                  </div>
                  
                  <div className="logo-text">
                    <div className="security position-text-pic">
                          <img src={Cashback} alt="Cashback logo" />  
                      <div className="sub-head-paragraphs">
                          <h3 className="h2-5">Regualar Cashback</h3>
                          <p className="p-8">Sit facilisis dolor arcu, fermentum
                            vestibulum arcu elementum imperdiet
                            eleifend.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="logo-text">
                    <div className="security position-text-pic">
                        <img src={Standard} alt="Standards logo" />  
                      <div className="sub-head-paragraphs">  
                        <h3 className="h2-6">Top Standards</h3>
                        <p className="p-9">Faucibus cursus maecenas lorem
                          cursus nibh. Sociis sit risus id. Sit
                          facilisis dolor arcu.</p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>   
        </section>
  )
}

export default FeaturesSection