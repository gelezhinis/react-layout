import React, {useState, useEffect} from 'react';
import './main.styles.css';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import HamburgerMenu from '../Navigations/HamburgerMenu/HamburgerMenu';
import SideDrawer from '../Navigations/SideDrawer/SideDrawer';
import Backdrop from '../Navigations/Backdrop/Backdrop';
import MainContainer from '../MainContainer/MainContainer';

const Main = () => {
   const [width, setWidth] = useState(window.innerWidth);
   const [sideDrawerVisibility, setSideDrawerVisibility] = useState(false)
   const breakPoint = 412;
   const tabBreakPoint = 824;

   useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);

      return () => window.removeEventListener('resize', handleWindowResize);
   }, []);

   function showSideDrawer() {
      setSideDrawerVisibility(true);
   }

   function hideSideDrawer() {
      setSideDrawerVisibility(false);
   }

   let backdrop;
   if (sideDrawerVisibility) {
      backdrop = <Backdrop backdropClickHandler={hideSideDrawer} />
   }

   return (

      <section className="main">
         {width > tabBreakPoint ? <Nav /> : (width<breakPoint ? <Footer /> : <HamburgerMenu click={showSideDrawer} />)}
         <SideDrawer show={sideDrawerVisibility} click={hideSideDrawer}/>
         {backdrop}
         <MainContainer />
      </section>
   );
}

export default Main;