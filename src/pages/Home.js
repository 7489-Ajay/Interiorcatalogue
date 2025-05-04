import React from 'react';
import './Home.css';

import heroImage from '../assets/heroImage.jpg'; // badi background photo
import img1 from '../assets/Clinic.webp';
import img2 from '../assets/Kitchen.webp';
import img3 from '../assets/livingroom.webp';
import img4 from '../assets/gallery.webp';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/catalogue');
  };

  return (
    <div className="home-section">
      {/* Hero Section with background image */}
      <div className="hero-container">
        <img src={heroImage} alt="Hero Background" className="hero-image" />
        <div className="hero-text">
          <p>
            We build our customer's dream home as per his wish. Our firm start in Delhi and serving since 2012. 
            Our team has the expertise of fine artisans and modular furniture. We make modular kitchen, wooden doors, 
            window, cupboard, wall panelling and other furniture for your home and office's.
          </p>
        </div>
      </div>

      {/* 4 small design images */}
      <div className="design-gallery">
        <div className="design-item"><img src={img1} alt="Design 1" /></div>
        <div className="design-item"><img src={img2} alt="Design 2" /></div>
        <div className="design-item"><img src={img3} alt="Design 3" /></div>
        <div className="design-item"><img src={img4} alt="Design 4" /></div>
      </div>

      {/* Button to go to catalogue */}
      <button className="more-btn" onClick={handleMoreClick}>More Items</button>
    </div>
  );
};

export default Home;

