import React from 'react'
import { Link } from 'react-router-dom'
import SliderImage from '../../components/SliderImage'
import { images } from '../../data'

function SECTION_A() {
  return (
    <section className='section-a'>
      <div className="elementary__container">
        <div className="elementary-header">
          <h1>GRAVITY COLOMBO</h1>
          <p>Yes, Gravity Colombo loves design. We love creating it digital first. We love applying it to activations, branding, content, experiences, interfaces and yes, even interactions. But what we love more is creating it to be high on engagement and rooted in sentiment.</p>
          <Link to='/project'>View The Work</Link>
        </div>
        <h2>HAPPY CLIENTS</h2>
      </div>
      <div className="slider-size">
        <SliderImage 
          img={images} 
          slide={4} 
          class={'slider-div'}
        />
      </div>
    </section>
  )
}

export default SECTION_A;
