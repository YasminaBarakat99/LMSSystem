import React from 'react';
import '../../Styles/Main/LogoutButton.css';

import logout from '../../Images/Sidebar icons/logout.svg';

function LogoutButton() {
  return (
    <div className='logout-button'>
      <img src={logout} alt='logout' className='logout'/>
      <p className='logout-button-text'>تسجيل الخروج</p>
    </div>
  );
}

export default LogoutButton;
