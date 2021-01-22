import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import './links-nav.styles.css';

const LinksNav = () => {

   return (
      <div className="links-nav">
         <NavLink activeClassName="active" to="/news">Naujienos</NavLink>
         <NavLink activeClassName="active" to="/results">Rezultatai</NavLink>
         <NavLink to="/">
            <img src={Logo} alt="logo" style={{width: '110px'}}/>
         </NavLink>
         <NavLink activeClassName="active" to="/team">Komanda</NavLink>
         <NavLink activeClassName="active" to="/contact">Kontaktai</NavLink>
      </div>
   );
};

export default LinksNav;