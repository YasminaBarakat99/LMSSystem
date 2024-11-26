import React from 'react';
import '../../Styles/Main/Navbar.css';

import AnasAcadLogo from '../../Images/AnasAcadLogo.png';
import logo from '../../Images/logo.svg';
import activeNotif from '../../Images/active-notification.svg';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={AnasAcadLogo} alt="AnasAcadLogo" className='AnasAcadLogo' />
      <div className='navbar-left'>
        <img src={activeNotif} alt='activeNotif' className='activeNotif'/>
        <span className='nav-separator'></span>
        <img src={logo} alt="logo" className='logo' />
        <div className='navbar-p'>
            <p className='student-name'>أسم الطالب الثلاثي</p>
            <p className='student-code'>000000</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
