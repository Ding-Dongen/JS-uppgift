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
import GoogleMap from '../assets/images/google-map.svg'



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
            <h2>Get Online Consultation</h2>
        
            <form className="contact-form">
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <select id="message" name="message" required>
                        <option value="">Select a message</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit">Make an appointment</button>
            </form>
            
        </div>

        <section className="bottom-section">
          <div className="map-container">
            <img src={GoogleMap} alt="Googlemap" />
          </div>
          <div className="location location1">
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
            <p><strong>Mon - Fri:</strong> 24/7<strong> Sat - Sun: </strong> 24/7</p>
            </div>
          </div>

          <div className="location location2">
            <h3>Beach 2</h3>
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
            <p><strong>Mon - Fri:</strong> 24/7<strong> Sat - Sun: </strong> 24/7</p>
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