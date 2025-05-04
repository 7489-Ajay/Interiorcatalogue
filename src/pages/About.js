import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Our Company</h2>
        <p className="about-tagline">Turning spaces into dream homes with creativity and precision.</p>

        <div className="about-content">
          <div className="about-card">
            <h3>Who We Are</h3>
            <p>
              We are a passionate team of interior designers and craftsmen dedicated to transforming houses into dream homes. 
              Our company has been a trusted name in the industry for years, delivering modern, elegant, and highly personalized interior solutions.
            </p>
          </div>

          <div className="about-card">
            <h3>What We Do</h3>
            <p>
              From concept to completion, we offer a full range of services to make your vision a reality:
            </p>
            <ul>
              <li>🏠 Complete Home Interior Design</li>
              <li>🛋️ Bedroom, Living Room & Kitchen Makeovers</li>
              <li>🎨 Color & Texture Consultation</li>
              <li>📐 3D Visualizations & Layout Planning</li>
              <li>🖼️ Custom Furniture & Wall Art Installation</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Our Philosophy</h3>
            <p>
              Every home has a story. Our mission is to bring that story to life with timeless designs, attention to detail, and high-quality workmanship. 
              We believe your space should reflect your personality, lifestyle, and dreams.
            </p>
          </div>
        </div>

        <div className="about-footer">
          <p>
            Interested in making your dream home a reality? <a href="#contact">Contact us today!</a>
          </p>

          <div className="owner-info">
            <img src="/owner.jpg" alt="Company Owner" className="owner-photo" />
            <p className="owner-name">Ajay Sharma<br /><span>Founder & Chief Designer</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

