import React, { useState } from 'react'

import Bell from '../assets/images/imgage-subscribe.svg'

const SubscribeSection = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const emailValidation = () => {
      const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (regEx.test(email)) {
        setMessage("Email is valid")
      } else if (!regEx.test(email)) {
        setMessage("Email is not valid")
      } else {
        setMessage("")
      }
    }

    const handleChange = (e) => {
      setEmail(e.target.value)

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
                      <input className="form-input" aria-label="Email for newsletter subscription" type="email" placeholder="Your email" />
                      <button type="button" aria-label="Subscribe to newsletter" className="btn-subscribe">Subscribe</button>
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
                        <button type="button" className="btn-subscribe" onClick={emailValidation}>Subscribe</button>
                        <p>{message}</p>
                      </div>  
                  </div>
                </div>  
            </div>
        </section>
  )
}

export default SubscribeSection