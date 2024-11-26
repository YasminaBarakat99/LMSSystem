import React from 'react';
import '../../../Styles/Main/Sidebar.css';

import NavigationMenu from './NavigationMenu';

import sidebarlogo from '../../../Images/Sidebar icons/sidebarLogo.png';

function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <img src={sidebarlogo} alt='sidebarlogo' className='sidebarlogo' />
        <NavigationMenu />
      </div>
      <span className='sidebar-separator'></span>
    </>
  );
}

export default Sidebar;