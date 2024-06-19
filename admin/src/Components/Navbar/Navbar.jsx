import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav">
      <img src={navlogo} alt="" className="nav-logo" /> 
      <p>Wardrobe <br /> Personalizer</p>
      </div>
    </div>
  )
}

export default Navbar
