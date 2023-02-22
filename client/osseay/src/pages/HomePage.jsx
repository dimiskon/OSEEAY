import React from 'react';
import '../styles/HomePage.css';

import Logo from '../assets/25495963368_66bb109f7e_k.jpg'

const HomePage = () => {
  return (
    <div className= 'homePage' style={{ backgroundImage: `url(${Logo})` }}></div>
  )
}

export default HomePage;
