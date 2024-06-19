import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='poster'>
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-FREEDEL-above799.jpg" alt=''/>
    <div className='newsletter'>
      <h2>Get Exclusive Offer On Your Whatsapp</h2>
      <p>Send Your Number To Us And We Will Give You Regular Updates</p>
      <div>
        <input type="tel" placeholder='Your Mobile Number'/>
        <button>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Newsletter
