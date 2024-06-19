import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png';
import exchange from '../Assets/exchange.png'
import hand from  '../Assets/hand.png'
import quality from '../Assets/quality.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>Wardrobe Personalizer</p>
      </div>
      <div className="ftr-top">
        <ul>
          <li>
            <img src={exchange} alt="Logo 1" />
            <span aria-label="EASY EXCHANGE"><strong>EASY EXCHANGE</strong></span>
          </li>
          <li>
            <img src={hand} alt="Logo 2" />
            <span aria-label="100% HANDPICKED"><strong>100% HANDPICKED</strong></span>
          </li>
          <li>
            <img src={quality} alt="Logo 3" />
            <span aria-label="ASSURED QUALITY"><strong>ASSURED QUALITY</strong></span>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All right reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
