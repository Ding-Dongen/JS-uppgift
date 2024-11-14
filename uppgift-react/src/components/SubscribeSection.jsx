import React, { useState } from 'react'
import axios from 'axios'

import Bell from '../assets/images/imgage-subscribe.svg'

const SubscribeSection = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    
 
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

const handleOk = () => {
  setIsSubmitted(false)
}

const handleSubscribe = async (e) => {
  e.preventDefault()

  if (validateEmail(email)) {
      setIsSubmitting(true);
      try {
          // Part taken from chatGPT but modified by me
          const response = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/subscribe', { email });
          setIsSubmitted(true)
          setEmail("");
      } catch (error) {
          console.error('Subscription failed:', error);
          setMessage("An error occurred while subscribing. Please try again later.");
      } finally {
          setIsSubmitting(false);
      }
  }
};

if (isSubmitted) {
  return (
    <div className='thank-you'>
      <h2>Thank you for your subscription</h2>
      <p>We hope you will enjoy it!</p>
      <button className='btn-ok' onClick={handleOk}>OK</button>
    </div>
  )
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
                      <input className="form-input" aria-label="Email for newsletter subscription" type="email" placeholder="Your email" value={email} onChange={handleChange} disabled={isSubmitting} />
                      <button type="button" aria-label="Subscribe to newsletter" className="btn-subscribe" onClick={handleSubscribe} disabled={isSubmitting}>Subscribe</button>
                      <span className='message-err'>{message}</span>
                    </div>  
                </div>
              </div>
                <div className="only-mobile-tablet">
                  <div className="text-subscribe">
                    <img src={Bell} alt="Bell" />
                    <h4>Subscribe to our newsletter</h4>
                  </div>
                  <form onSubmit={handleSubscribe} className="form">  
                      <div className="input-icon">
                        <i className="fa-regular fa-envelope"></i>
                        <input className="form-input email" type="email" placeholder="Your email" value={email} onChange={handleChange} disabled={isSubmitting} />
                        <button type="button" className="btn-subscribe" onClick={handleSubscribe} disabled={isSubmitting}>Subscribe</button>
                        <div>
                        <span className='message-err'>{message}</span>
                        </div>
                      </div>  
                  </form>
                </div>  
            </div>
        </section>
  )
}

export default SubscribeSection