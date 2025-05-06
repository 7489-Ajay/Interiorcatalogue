import React from 'react';
import './Home.css';
import heroImage from '../assets/heroImage.jpg';
import img1 from '../assets/Clinic.webp';
import img2 from '../assets/Kitchen.webp';
import img3 from '../assets/livingroom.webp';
import img4 from '../assets/gallery.webp';
import img5 from '../assets/bedroomhome.webp';
import img6 from '../assets/officehome.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/catalogue');
  };

  return (
    <div className="home-section">
      <div className="hero-container">
        <img src={heroImage} alt="Hero Background" className="hero-image" />
      </div>

      <div className="hero-intro">
        <p>
          We build our customer's dream home as per their wish. Started in Delhi in 2012, our team combines traditional craftsmanship with modern furniture solutions.
        </p>
      </div>

      {/* Section: Experience */}
      <div className="home-experience">
        <h2>10+ Years of Excellence</h2>
        <p>
          Trusted by hundreds of clients for quality and timely delivery in home and office interiors.
        </p>
      </div>

      {/* Section: Services */}
      <div className="home-services">
        <h2>Our Specialties</h2>
        <p>
          Modular kitchens, custom wardrobes, wooden doors, wall paneling & full interior solutions — all under one roof.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="design-gallery">
        <div className="design-item"><img src={img1} alt="Clinic" /></div>
        <div className="design-item"><img src={img2} alt="Kitchen" /></div>
        <div className="design-item"><img src={img3} alt="Living Room" /></div>
        <div className="design-item"><img src={img4} alt="Gallery" /></div>
        <div className="design-item"><img src={img5} alt="Bedroom" /></div>
        <div className="design-item"><img src={img6} alt="Office" /></div>
      </div>

      {/* Final CTA */}
      <div className="home-cta">
        <h2>See More Designs</h2>
        <p>
          Explore our catalogue for hand-picked designs tailored to your space and style.
        </p>
      </div>

      <button className="more-btn" onClick={handleMoreClick}>More Items</button>
    </div>
  );
};

export default Home;

