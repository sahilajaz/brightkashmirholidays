import React from 'react';
import MyCarousel from '../carousel/MyCarousel';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="home">
      <MyCarousel />
    </div>
  );
};

export default Home;
