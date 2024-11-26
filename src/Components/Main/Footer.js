import React from 'react';
import '../../Styles/Main/Footer.css';

import anasacadlogowhite from '../../Images/Footer icons/anasacadlogowhite.png';
import fb from '../../Images/Footer icons/fb.svg';
import x from '../../Images/Footer icons/x.svg';
import yt from '../../Images/Footer icons/yt.svg';
import ln from '../../Images/Footer icons/ln.svg';
import ig from '../../Images/Footer icons/ig.svg';

import uklogo from '../../Images/Footer icons/uklogo.png';

function Footer() {
  return (
    <div className='footer'>

      <div className='footer-top'>
        <img src={anasacadlogowhite} alt='anasacadlogowhite' className='anasacadlogowhite'/>
        <div className='social-icons'>
          <div className='social-icon-container'><img src={fb} alt='fb' className='social-icon'/></div>
          <div className='social-icon-container'><img src={x} alt='x' className='social-icon'/></div>
          <div className='social-icon-container'><img src={yt} alt='yt' className='social-icon'/></div>
          <div className='social-icon-container'><img src={ln} alt='ln' className='social-icon'/></div>
          <div className='social-icon-container'><img src={ig} alt='ig' className='social-icon'/></div>
        </div>
      </div>

      <div className='footer-middle'>
        <ul className='footer-menu'>
          <li className='footer-menu-item'>الدبلومات</li>
          <li className='footer-menu-item'>الدورات</li>
          <li className='footer-menu-item'>المتجر</li>
          <li className='footer-menu-item'>المنتديات</li>
          <li className='footer-menu-item'>الشروط والأحكام</li>
        </ul>
        <img src={uklogo} alt='uklogo' className='uklogo'/>
      </div>

      <div className='footer-bottom'>جميع الحقوق محفوظة لأكاديمية أنس للفنون© 2023 </div>
    
    </div>
  );
}

export default Footer;
