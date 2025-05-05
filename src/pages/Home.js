import React, { useEffect, useRef } from 'react';
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
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textRef.current.classList.add('animate-slide-in');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const handleMoreClick = () => {
    navigate('/catalogue');
  };

  return (
    <div className="home-section">
      <div className="hero-container">
        <img src={heroImage} alt="Hero Background" className="hero-image" />
      </div>

      {/* Animated Hero Text */}
      <div className="hero-text" ref={textRef}>
        <p>
          We build our customer's dream home as per his wish. Our firm started in Delhi and has been serving since 2012.
          Our team has the expertise of fine artisans and modular furniture. We make modular kitchens, wooden doors,
          windows, cupboards, wall paneling, and other furniture for your home and offices.
        </p>
      </div>

      <div className="design-gallery">
        <div className="design-item"><img src={img1} alt="Design 1" /></div>
        <div className="design-item"><img src={img2} alt="Design 2" /></div>
        <div className="design-item"><img src={img3} alt="Design 3" /></div>
        <div className="design-item"><img src={img4} alt="Design 4" /></div>
        <div className="design-item"><img src={img5} alt="Design 5" /></div>
        <div className="design-item"><img src={img6} alt="Design 6" /></div>
      </div>

      <button className="more-btn" onClick={handleMoreClick}>More Items</button>
    </div>
  );
};

export default Home;
