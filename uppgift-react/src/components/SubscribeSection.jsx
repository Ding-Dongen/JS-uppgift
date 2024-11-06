import React, { useState } from 'react'

import Bell from '../assets/images/imgage-subscribe.svg'

const SubscribeSection = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    
 
   const validateEmail = (email) => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regEx.test(email);
}


const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail === "") {
        setMessage(""); 
    } else if (!validateEmail(newEmail)) {
        setMessage("Enter a valid email! (Ex. user@example.com)");
    } else {
        setMessage(""); 
    }
}


  return (
        <section className="section-8" aria-label="Subscribe to our newsletter overview">
            <div className="part-8">
              <div className="text-subscribe-desktop-only">
                <div className="text-subscribe">
                  <img src={Bell} alt="Bell" />
                  <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
                </div>
                <div className="form">  
                    <div className="input-icon">
                      <i className="fa-regular fa-envelope"></i>
                      <input className="form-input" aria-label="Email for newsletter subscription" type="email" placeholder="Your email" value={email} onChange={handleChange} />
                      <button type="button" aria-label="Subscribe to newsletter" className="btn-subscribe">Subscribe</button>
                      <span className='message-err'>{message}</span>
                    </div>  
                </div>
              </div>
                <div className="only-mobile-tablet">
                  <div className="text-subscribe">
                    <img src={Bell} alt="Bell" />
                    <h4>Subscribe to our newsletter</h4>
                  </div>
                  <div className="form">  
                      <div className="input-icon">
                        <i className="fa-regular fa-envelope"></i>
                        <input className="form-input email" type="email" placeholder="Your email" value={email} onChange={handleChange} />
                        <button type="button" className="btn-subscribe">Subscribe</button>
                        <span className='message-err'>{message}</span>
                      </div>  
                  </div>
                </div>  
            </div>
        </section>
  )
}

export default SubscribeSection