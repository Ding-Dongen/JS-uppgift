import React from 'react'

const InformationSection = () => {
  return (
    <section className="section-5-only-desktop part-5" aria-label="Learning more about the app">
          <div className="make-money">
            <h2 className="make-money-header">Make your money transfer simple and clear</h2>
            <ul className="list-head">
              <li className="check"><img src="./images/icons/bx-check-circle.svg" alt="One of three checked circles" />Banking transactions are free for you</li>
              <li className="check"><img src="./images/icons/bx-check-circle.svg" alt="Two of three checked circles" />No monthly cash commission</li>
              <li className="check"><img src="./images/icons/bx-check-circle.svg" alt="Third of three checked circles" />Manage payments and transactions online</li>
            </ul>
          </div>  
            <div className="btn-1">
            <a href="#" className="btn-money">
              <span>Learn more</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            </div>
          
          <div className="pics-right">
            <img src="./images/pic-right1.svg" alt="Diagram" className="image-right" />
            <img src="./images/pic-right2.svg" alt="Icons information" className="image-right2" />
          </div>

          <div className="pics-left">
            <img src="./images/pic-left1.svg" alt="Name information" className="image-left" />
            <img src="./images/iphone12-mask-card.svg" alt="Card information" className="image-left2" />
          </div>

            <h2 className="recieve-head">Receive payment from international bank details</h2>
              <div className="flex-recieve">
                <div className="card-recieve card-folder">
                  <img src="./images/icons/icon-payments.svg" alt="Icon card" />
                  <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
                <div className="folder-recieve card-folder">
                  <img src="./images/icons/icon-cashback.svg" alt="Icon folder" />
                  <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
              </div> 
                
                <div className="btn-2">  
                <a id="btn-make" href="#" className="btn-money">
                <span>Learn more</span>
                <i className="fa-solid fa-arrow-right"></i>
                </a>
                </div>
        </section>
  )
}

export default InformationSection