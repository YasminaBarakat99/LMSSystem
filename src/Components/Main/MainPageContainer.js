import React from 'react';
import '../../Styles/Main/MainPageContainer.css';

import Navbar from '../Main/Navbar';
import Sidebar  from '../Main/Sidebar/Sidebar';
import Footer from '../Main/Footer';

function MainPageContainer({children}) {
  return (
    <>
        <div className='main-page'>
            <Navbar />
            <div className='main-container'>
                <Sidebar />
                <div >
                    {children}
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </>
  );
}

export default MainPageContainer;
