import React from 'react';
import './nav.styles.css';

import Container from '../Container/Container';
import LinksNav from '../Navigations/LinksNav/LinksNav';

const Nav = () => {

   return (
      <nav>
         <Container>
            <LinksNav />
         </Container>
      </nav>
   );
};

export default Nav;