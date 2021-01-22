import React from 'react';
import {NavLink} from 'react-router-dom'

import './links-footer.styles.css';

const LinksFooter = () => {

   return (
      <div className="links-footer">
         <NavLink activeClassName="active" to="/news">Naujienos</NavLink>
         <NavLink activeClassName="active" to="/results">Rezultatai</NavLink>
         <NavLink activeClassName="active" to="/team">Komanda</NavLink>
         <NavLink activeClassName="active" to="/contact">Kontaktai</NavLink>
      </div>
   );
};

export default LinksFooter;