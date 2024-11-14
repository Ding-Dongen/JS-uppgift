import React from 'react'

import PhoneBlue from '../assets/images/support-phone.svg'
import PhoneGreen from '../assets/images/support-phone-green.svg'
import Accordion from './Accordion'


const QuestionSection = () => {

  return (
    <section className="section-7" aria-label="FAQs of the app">
        <div className="part-7">
        <h2>Any questions? Check out the FAQs</h2>
        <p className="para-faq">Still have unanswered questions and need
            to get in touch?</p>
        <div className="box-accordion">
            <Accordion />
        </div>

        <div className="btn-support">
            <button className="btn-support-mobile-only">Contact us now</button>
        </div>

        <div className="boxes-suport">
            <div className="box1-support">
            <img src={PhoneBlue} alt="Support phone" />
            <a href="#" className="contact-us">
            <span className="contact-chats1">Contact us</span>
            <i className="fa-solid fa-arrow-right"></i>
            </a>
            </div>

            <div id="box-2" className="box1-support">
            <img src={PhoneGreen} alt="Support phone" />
            <a href="#" className="contact-us">
            <span className="contact-chats2">Contact us</span>
            <i id="arrow-green" className="fa-solid fa-arrow-right"></i>
            </a>
            </div>
        </div>
        </div>  
    </section>
  )
}

export default QuestionSection