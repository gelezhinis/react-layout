import React from 'react';
import {Route} from 'react-router-dom';
import './main-container.styles.css';

import News from '../News/News';
import Results from '../Results/Results';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

const MainContainer = () => {

   return (
      <div className="main-container" >
         <Route exact path="/" component={Home} />
         <Route path="/news" component={News} />
         <Route path="/results" component={Results} />
         <Route path="/team" component={Team} />
         <Route path="/contact" component={Contact} />
      </div>
   );
};

export default MainContainer;