import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='poster'>
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21032024-Z10-EGiftcard.gif" alt="" />
    <div className='offers'>
      <div className="offers-left">
        <h1>FlASH SALEEEE</h1>
        <h1>ONLY for OUR PRECIOUS COSTUMER</h1>
        <p>Come Fast And Get As Much Possible..</p>
        <button>Check Collection</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Offers
