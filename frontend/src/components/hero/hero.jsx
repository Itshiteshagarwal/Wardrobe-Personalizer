import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='poster'>
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-18042024-NoPlatformCODfee-Z1.gif" alt="" />
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals only Avilable At</h2>
        <div>
            <p>WARDROBE PERSONALIZER </p>
            <p>for everyone</p>
            <br />
            <h2>Here You Can Find Best Recommendation of Clothes ...</h2>
        </div>
        <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Hero
