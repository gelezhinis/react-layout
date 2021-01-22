import React from 'react';
import './home.styles.css';

import TeamImg from '../../assets/team.png';

const Home = () => (
   <div className="home">
      <img src={TeamImg} alt="team_img" />
   </div>
);

export default Home;