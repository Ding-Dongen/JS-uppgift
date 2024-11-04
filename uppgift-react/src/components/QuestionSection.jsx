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
            {/* <button className="accordion">Is any of my personal information
            stored in the App?
            <span className="btn-accordion">
                <i className="fa-solid fa-chevron-down"></i>
            </span>  
            </button>
            <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <button className="accordion">What formats can I download my
            transaction history in?
            <span className="btn-accordion">
                <i className="fa-solid fa-chevron-down"></i>
            </span> 
            </button>
            <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <button className="accordion">Can I schedule future transfers?
            <span className="btn-accordion">
                <i className="fa-solid fa-chevron-down"></i>
            </span> 
            </button>
            <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button className="accordion">When can I use Banking App
            services?
            <span className="btn-accordion">
                <i className="fa-solid fa-chevron-down"></i>
            </span> 
            </button>
            <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button className="accordion">Can I create my own password that is
            easy for me to remember?
            <span className="btn-accordion">
                <i className="fa-solid fa-chevron-down"></i>
            </span> 
            </button>
            <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button className="accordion">What happens if I forget or lose my
            password?
            <span className="btn-accordion">
                <i className="fa-solid fa-chevron-down"></i>
            </span> 
            </button>
            <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div> */}
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

const data = [
    {
      question: "Is any of my personal information stored in the App?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "What formats can I download my transaction history in?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Can I schedule future transfers?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    // Add more questions here if needed
    {
      question: "When can I use Banking App services?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Can I create my own password that is easy for me to remember?",
      answer: "Yes, you can create a password that's easy for you to remember."
    },
    {
      question: "What happens if I forget or lose my password?",
      answer: "You can reset your password using the 'Forgot Password' feature."
    }
  ];

export default QuestionSection