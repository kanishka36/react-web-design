import React from 'react'
import image from '../../Images/shaped.png'

function SECTION_C() {
  return (
    <section className='section-c'>
      <div className="discription__container">
          <h1>BE WORTH THEIR TIME</h1>
          <h2>THEIR TIME WILL BE WORTH YOUR MONEY</h2>
          <div className="discription">
            <p>We believe building meaningful relationships with the audience is just as important as building revenue. At Centrick, we rely on data to create content that is rooted in sentiment. We put search at the heart of everything we create. This helps us design solutions that are always Google first or Amazon friendly. Yes! We built Centrick on the crossroads of data, technology and creativity. Here, Art, Copy and Code mingle together with mutual respect to create one thing, and one thing only, Magic.</p>
          </div>
        </div>
        <img src={image} alt="shape-img" />
    </section>
  )
}

export default SECTION_C