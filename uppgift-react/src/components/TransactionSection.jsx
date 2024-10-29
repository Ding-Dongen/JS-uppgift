import React from 'react'

const TransactionSection = () => {
  return (
    <section className="section-4" aria-label="Understanding how the app works">
          <div className="part-4">
            <h2 className="transaction-head2">How Does It Work?</h2>
            <div className="pics-transaction-tablet-mobile">
              <img src="./images/showcase-2.svg" alt="Phone left" className="phone-tablet-left" />
              <img src="./images/transaction-phone-tablet-mobile-desktop.svg" alt="Phone shell" className="phone-shell-middle" />
              <img src="./images/showcase-3.svg" alt="Phone middle" className="phone-tablet-mobile-middle" />
              <img src="./images/showcase-4.svg" alt="Phone right" className="phone-tablet-right" />
            </div>

            <div className="pics-transaction-desktop">

              <img src="./images/transaction-phone-left-desktop.svg" alt="Phone left" className="phone-desktop-left" />
              <img src="./images/transaction-phone-tablet-mobile-desktop.svg" alt="Phone shell" className="phone-shell-middle-desktop" />
              <img src="./images/transaction-phone.middle.svg" alt="Phone middle" className="phone-desktop-middle" />
              <img src="./images/transation-phone-right-desktop.svg" alt="Phone right" className="phone-desktop-right" />
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