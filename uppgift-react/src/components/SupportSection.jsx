import React from 'react'

const SupportSection = () => {
  return (
    <section className="section-6-only-desktop" aria-label="Support and reviews overview">
          <div className="part-6">
            <h1>Clients are Loving Our App</h1>
            <div id="quote-second" className="quote"><img src="./images/icons/icon-quotes.svg" alt="First Quotes" /></div>
            <div id="quote-first" className="quote"><img src="./images/icons/icon-quotes.svg" alt="Second Quotes" /></div>
            <div className="box box-1">
                <img src="./images/icons/star-solid.svg" alt="One of five Stars solid" />
                <img src="./images/icons/star-solid.svg" alt="Second of five Stars" />
                <img src="./images/icons/star-solid.svg" alt="Third of five Stars" />
                <img src="./images/icons/star-solid.svg" alt="Fourth of five Stars" />
                <img src="./images/icons/star-transparent.svg" alt="Fifth of five Stars, not solid" />
                <p className="par-main">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                <div className="name-title">
                  <img src="./images/image-box1.svg" alt="Head" />
                  <div className="par-box1">
                  <p className="par-name">Fannie Summers</p>
                  <p className="par-designer">Designer</p>
                  </div>
                </div>
            </div>

            <div className="box box-2">
              <img src="./images/icons/star-solid.svg" alt="One of five Stars solid" />
              <img src="./images/icons/star-solid.svg" alt="Second of five Stars" />
              <img src="./images/icons/star-solid.svg" alt="Third of five Stars" />
              <img src="./images/icons/star-solid.svg" alt="Fourth of five Stars" />
              <img src="./images/icons/star-solid.svg" alt="Fifth of five Stars" />
              <p className="par-main">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
              <div className="name-title">
                <img src="./images/image-box2.svg" alt="Head" />
                <div className="par-box1">
                <p className="par-name">Albert Flores</p>
                <p className="par-designer">Developer</p>
                </div>
              </div>
          </div>
          </div>
        </section>
  )
}

export default SupportSection