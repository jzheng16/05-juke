'use strict';

import React from 'react';
import reactDOM from 'react-dom';
import Main from './main';
// import Sidebar from './Sidebar';
// import Footer from './Footer';




const bodyEle = document.querySelector('#app');


reactDOM.render(<Main />,bodyEle);

// const sideBarEle = document.querySelector('#sidebar');
// const footerEle = document.querySelector('#footer');
//
// reactDOM.render(<Sidebar />,sideBarEle);
// reactDOM.render(<Footer />,footerEle);