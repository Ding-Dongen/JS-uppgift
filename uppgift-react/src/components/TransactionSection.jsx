import React from 'react'

import ShowCase1 from '../assets/images/showcase-2.svg'
import ShowCase3 from '../assets/images/showcase-3.svg'
import ShowCase4 from '../assets/images/showcase-4.svg'
import Phone from '../assets/images/transaction-phone-tablet-mobile-desktop.svg'


import PhoneLeft from '../assets/images/transaction-phone-left-desktop.svg'
import PhoneMiddle from '../assets/images/transaction-phone.middle.svg'
import PhoneRight from '../assets/images/transation-phone-right-desktop.svg'


const TransactionSection = () => {
  return (
    <section className="section-4" aria-label="Understanding how the app works">
          <div className="part-4">
            <h2 className="transaction-head2">How Does It Work?</h2>
            <div className="pics-transaction-tablet-mobile">
              <img src={ShowCase1} alt="Phone left" className="phone-tablet-left" />
              <img src={Phone} alt="Phone shell" className="phone-shell-middle" />
              <img src={ShowCase3} alt="Phone middle" className="phone-tablet-mobile-middle" />
              <img src={ShowCase4} alt="Phone right" className="phone-tablet-right" />
            </div>

            <div className="pics-transaction-desktop">

              <img src={PhoneLeft} alt="Phone left" className="phone-desktop-left" />
              <img src={Phone} alt="Phone shell" className="phone-shell-middle-desktop" />
              <img src={PhoneMiddle} alt="Phone middle" className="phone-desktop-middle" />
              <img src={PhoneRight} alt="Phone right" className="phone-desktop-right" />
            </div>

            <div className="h3-paragraph-tablet-mobile">
            <h3 className="transaction-head3">Transfers to people from
              your contact list</h3>
            <p>Proin volutpat mollis egestas. Nam luctus facilisis
              ultrices. Pellentesque volutpat ligula est. Mattis
              fermentum, at nec lacus.</p>
            </div>

            <div className="h3-paragraph-desktop">
              <h4 className="transaction-head4">Latest transaction history</h4>
              <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>

            </div>
          </div>
        </section>
  )
}

export default TransactionSection