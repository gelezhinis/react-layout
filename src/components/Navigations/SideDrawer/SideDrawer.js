import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../../assets/logo.png';

import './sideDrawer.styles.css';

const SideDrawer = ({show, click}) => {
   let drawerClasses = 'side-drawer';
   if (show) {
      drawerClasses = 'side-drawer open';
   }

   return (
      <nav className={drawerClasses}>
         <ul>
            <NavLink onClick={click} to="/">
               <img src={Logo} alt="logo" style={{width: '70%'}}/>
            </NavLink>
            <NavLink 
               onClick={click} 
               activeClassName="active" 
               to="/news"
            >
               Naujienos 
            </NavLink>
            <NavLink 
               onClick={click} 
               activeClassName="active" 
               to="/results"
            >
               Rezultatai
            </NavLink>
            <NavLink 
               onClick={click} 
               activeClassName="active" 
               to="/team"
            >
               Komanda
            </NavLink>
            <NavLink 
               onClick={click} 
               activeClassName="active" 
               to="/contact"
            >
               Kontaktai
            </NavLink>
         </ul>
      </nav>
   );
};

export default SideDrawer;