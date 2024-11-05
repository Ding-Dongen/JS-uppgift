import React from 'react'
import Envelope from '../assets/images/icons/bx-envelope.svg'
import Groups from '../assets/images/icons/add-group.svg'
import TimeFive from '../assets/images/icons/bx-time-five.svg'
import Map from '../assets/images/icons/bx-map.svg'
import PhoneCall from '../assets/images/icons/bx-phone-call.svg'
import Facebook from '../assets/images/social-btn/facebook.svg'
import X from '../assets/images/social-btn/x.svg'
import Instagram from '../assets/images/social-btn/instagram.svg'
import Youtube from '../assets/images/social-btn/youtube.svg'


const Contact = () => {
  return (
    <div className='wrapper-contact'>
        
        <section className="top-section">
            <div className="wrapper-contact-us">

                <h2 className='contact-head'>Contact us</h2>
                <div className="contact-us">
                    <div className='contact-icon'>
                        <img src={Envelope} alt="Envelopes" />
                    </div>
                    <div className="contact-content">
                        <h4>Email us</h4>
                        <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                        <a href="#">Leave a message<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
            
                </div>
            
                
                <div className='contact-us'>
                    <div className='contact-icon'>
                        <img src={Groups} alt="icon" />
                    </div>
                    <div className="contact-content">
                        <h4>Careers</h4>
                        <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                        <a href="#">Send in application<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
    
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
            <div className='map-wrapper'>
            <img src={Map} alt="logos" />
            <p>1 spiaggia, 09010 Porto Pino SU, Italy</p>
            </div>
            <div className='map-wrapper'>
            <img src={PhoneCall} alt="logos" />
            <p>Airline comapany</p>
            </div>
            <div className='map-wrapper '>
            <img src={TimeFive} alt="logos" />
            <p><strong>Mon-Fri:</strong> 24/7<br /><strong>Sat-Sun:</strong> 24/7</p>
            </div>
          </div>

          <div className="location">
            <h3>Beach 1</h3>
            <div className='map-wrapper'>
            <img src={Map} alt="logos" />
            <p>1 spiaggia, 09010 Porto Pino SU, Italy</p>
            </div>
            <div className='map-wrapper'>
            <img src={PhoneCall} alt="logos" />
            <p>Airline comapany</p>
            </div>
            <div className='map-wrapper '>
            <img src={TimeFive} alt="logos" />
            <p><strong>Mon-Fri:</strong> 24/7<br /><strong>Sat-Sun:</strong> 24/7</p>
            </div>
          </div>

          <div className="social-container">
            <a href="#" className="social-icon"><img src={Facebook} alt="Facebook" /></a>
            <a href="#" className="social-icon"><img src={Instagram} alt="Instagram" /></a>
            <a href="#" className="social-icon"><img src={X} alt="Twitter" /></a>
            <a href="#" className="social-icon"><img src={Youtube} alt="Youtube" /></a>
          </div>
        </section>
    </div>
    
  )
}

export default Contact