import React from 'react';

import './hamburgerMenu.styles.css';

const HamburgerMenu = ({click}) => (
   <nav className="hamburger-nav">
      <button className="toggle-button" onClick={click} >
         <div className="toggle-button-line" />
         <div className="toggle-button-line" />
         <div className="toggle-button-line" />
      </button>
   </nav>
);

export default HamburgerMenu;