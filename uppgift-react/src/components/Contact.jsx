import React from 'react'
import Envelope from '../assets/images/icons/bx-envelope.svg'
import Groups from '../assets/images/icons/add-group.svg'


const Contact = () => {
  return (
    <div className='wrapper-contact'>
        
        <section className="top-section">
            <div className="wrapper-contacts">

                <h4 className='contact-head'>Contact us</h4>
                <div className="contact-us">
                    <div>
                        <img src="{Envelope}" alt="Envelopes" />
                    </div>
                    <div className="email-us">
                        <h4>Email us</h4>
                        <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                        <a href="#">Leave a message<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
            
                </div>
                </div>
                
                <div className='contact-us'>
                <div className='envelope'>
                    <img src="{Groups}" alt="icon" />
                </div>
                <div className="email-us">
                    <h4>Careers</h4>
                    <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                    <a href="#">Send in application<i className="fa-solid fa-arrow-right"></i></a>
                </div>
  
            </div>
        </section>

        <div className="contact-container">
            <h1>Get Online Consultation</h1>
        
            <form className="contact-form">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
                <input type="email" id="email" name="email" placeholder="Your Email" required />
                <input type="text" id="subject" name="subject" placeholder="Subject" />
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            
        </div>

        <section className="bottom-section">
          <div className="map-container">
            
          </div>
          <div className="location">
            <h3>Beach 1</h3>
            <i className="fa-regular fa-location-pin"></i>
            <p>1 spiaggia, 09010 Porto Pino SU, Italy</p>
            <i className="fa-light fa-phone"></i>
            <p>Airline comapany</p>
            <i className="fa-light fa-clock"></i>
            <p><strong>Mon-Fri:</strong> 24/7</p>
            <p><strong>Sat-Sun:</strong> 24/7</p>
          </div>
          <div className="social-container">
            <a href="#" className="social-icon"><img src="./images/social-btn/icons/bxl-facebook-square.svg" alt="Facebook" /></a>
            <a href="#" className="social-icon"><img src="./images/social-btn/icons/bxl-instagram-alt.svg" alt="Instagram" /></a>
            <a href="#" className="social-icon"><img src="./images/social-btn/icons/bxl-twitter.svg" alt="Twitter" /></a>
            <a href="#" className="social-icon"><img src="./images/social-btn/icons/bxl-youtube.svg" alt="Youtube" /></a>
          </div>
        </section>
    </div>
    
  )
}

export default Contact