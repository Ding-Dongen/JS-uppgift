import React, {useState} from 'react'
import Logo1 from '../assets/images/logo-1-desktop-tablet.svg'
import Logo2 from '../assets/images/logo-2-desktop-tablet.svg'
import Logo3 from '../assets/images/logo-3-desktop-tablet.svg'
import Logo4 from '../assets/images/logo-4-desktop-tablet.svg'
import Logo5 from '../assets/images/logo-5-only-desktop.svg'
import Logo6 from '../assets/images/logo-6-only-desktop.svg'

const FeaturesSection = () => {

  return (
    <section clasName="section-3" aria-label="Features Overview">

            <div id="container-3" clasName="part-3 ">

            <div clasName="wrapper-logos">
                <div clasName="logo-desktop-tablet">
                  <img src={Logo1} alt="First logo is called logo" />
                </div>
                <div clasName="logo-desktop-tablet">
                  <img src={Logo2} alt="Second logo is called logoipsum" />
                </div>
                <div clasName="logo-desktop-tablet">  
                  <img src={Logo3} alt="Third logo is called Logoipsum with solid and transparent letters" />
                </div>
                <div clasName="logo-desktop-tablet">  
                  <img src={Logo4} alt="Fourth logo is called logoipsum with solid letters" />
                </div>
                <div clasName="logo-desktop-tablet" id="desktop-only1">  
                  <img src={Logo5} alt="Fifth logo is for desktop only with solid letters" />
                </div>
                <div clasName="logo-desktop-tablet" id="desktop-only2">  
                  <img src={Logo6} alt="Sixth logo for desktop only with solid letters" />
                </div>  
              </div>

            
              <div clasName="phone-features">
                <img src="./images/iphone12-Mask.svg" alt="One part of the three images, frame" clasName="image1" />
                <img src="./images/iphone12-mask-info.svg" alt="Secon part, information in the phone" clasName="image2" />
                <img src="./images/iphone12-mask-card.svg" alt="Third part, credit card" clasName="image3" />
              </div>
              
              <div clasName="head-paragraph-features">
                <h1 clasName="header-features">App Features</h1>
                <p clasName="paragraph-features">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin volutpat mollis egestas.
                  Nam luctus facilisis ultrices. Pellentesque
                  volutpat ligula est. Mattis fermentum, at nec
                  lacus.</p>
              </div>
              <div clasName="parent-logo-text">
                  
                  <div clasName="logo-text">
                      <div clasName="payments position-text-pic">  
                        <img src="./images/icons/icon-payments.svg" alt="payment logo" />
                        <div clasName="sub-head-paragraphs">  
                          <h3 clasName="h2-1">Easy Payments</h3>
                          <p clasName="p-4">Id mollis consectetur congue egestas
                            egestas suspendisse blandit justo.</p>
                        </div>  
                      </div>
                  </div>   
                  
                  <div clasName="logo-texer">
                      <div clasName="security position-text-pic">
                        <img clasName="security" src="./images/icons/icon-security.svg" alt="security logo" />
                        <div clasName="sub-head-paragraphs">
                          <h3 clasName="h2-2">Data Security</h3>
                          <p clasName="p-5">Augue pulvinar justo, fermentum
                            fames aliquam accumsan vestibulum
                            non.</p>
                        </div> 
                      </div>
                  </div>
                  
                  <div clasName="logo-text">
                    <div clasName="security position-text-pic">
                          <img src="./images/icons/icon-statistics.svg" alt="statistics logo" />
                      <div clasName="sub-head-paragraphs">    
                          <h3 clasName="h2-3">Cost Statistics</h3>
                          <p clasName="p-6">Mattis urna ultricies non amet, purus
                            in auctor non. Odio vulputate ac nibh.</p>
                      </div>
                    </div>
                  </div>  
                  
                  <div clasName="logo-text">
                    <div clasName="security position-text-pic">
                          <img src="./images/icons/icon-support.svg" alt="Support logo" />
                      <div clasName="sub-head-paragraphs">    
                          <h3 clasName="h2-4">Support 24/7</h3>
                          <p clasName="p-7">A elementum, imperdiet enim, pretium
                            etiam facilisi in aenean quam mauris.</p>
                      </div>
                    </div>        
                  </div>
                  
                  <div clasName="logo-text">
                    <div clasName="security position-text-pic">
                          <img src="./images/icons/icon-cashback.svg" alt="Cashback logo" />  
                      <div clasName="sub-head-paragraphs">
                          <h3 clasName="h2-5">Regualar Cashback</h3>
                          <p clasName="p-8">Sit facilisis dolor arcu, fermentum
                            vestibulum arcu elementum imperdiet
                            eleifend.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div clasName="logo-text">
                    <div clasName="security position-text-pic">
                        <img src="./images/icons/icon-standard.svg" alt="Standards logo" />  
                      <div clasName="sub-head-paragraphs">  
                        <h3 clasName="h2-6">Top Standards</h3>
                        <p clasName="p-9">Faucibus cursus maecenas lorem
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