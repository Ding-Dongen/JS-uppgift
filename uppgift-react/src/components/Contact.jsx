import React, { useState } from 'react'
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
    // Kod taget från Hans men lite modifierad av mig
    const [options, setOptions] = useState([{ id: 1, text: "General Inquiry" },
                                            { id: 2, text: "Technical Support" }, 
                                            { id: 3, text: "Feedback" },
                                            { id: 4, text: "Other" }
    ], [])

    const [formData, setFormData] = useState({ name: '', email: '', specialist: options[0].id, })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const regExName = /^[a-öA-Ö\s\-]{2,}$/
    const regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    const validateField = (name, value) => {
        let error = ''

        if (name === 'name' && !regExName.test(value)) {
            error = "Must be at least 2 characters long and no numbers"
        } else if (name === 'email' && !regExEmail.test(value)) {
            error = "Enter a valid email (eg. username@example.se)"
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: error}))
    }

    const ValidateForm = () => {
        const newErrors = {}

        if (!regExName.test(formData.name)) {
            newErrors.name = "Enter at least 2 characters long and no numbers"
        }
        if (!regExEmail.test(formData.email)) {
            newErrors.email = "Enter a valid email (eg. username@example.se)"
        }

        setErrors(newErrors)
        return Object.keys(newErrors). length === 0
    }    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        validateField(name, value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (ValidateForm()) {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
                method: 'post',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                setSubmitted(true)
                setFormData({ name: '', email: '', category: options[0].id, })
            }
            console.log('valid form')
            } else {
                const errorData = await res.json();
                console.error('Error:', errorData);
                console.log('not valid')
            }
    }




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

        
            <form className="contact-form" noValidate>
                <div className="header">
                    <h2>Get Online Consultation</h2>
                </div>
                <div className='body'>
                    <div>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                        {errors.name && <span className='message-err'>{errors.name}</span>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                        {errors.email && <span className='message-err'>{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <select id="message" name="specialist" value={options.id} onChange={handleInputChange} required>
                            { options.map(option => (<option key={option.id} value={option.id}>{option.text}</option>))}
                        </select>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Make an appointment</button>
                </div>
            </form>
            

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