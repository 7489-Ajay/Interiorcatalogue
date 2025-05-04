import React from 'react';
import './Services.css';
import Kitchen from '../assets/Kitchen.webp';
import bedroom from '../assets/bedroom.webp';
import livingroom from '../assets/livingroom.webp';
import fullhome from '../assets/fullhome.jpg';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Why Choose Vishal Interior Catalogue?</h2>

        <p className="services-intro">
          At Vishal Interior Catalogue, we turn empty spaces into dream homes and inspiring offices.
          Backed by expert designers and craftsmen, we deliver elegant, functional, and cost-effective interiors with precision and professionalism.
        </p>

        <ul className="services-highlights">
          <li>✅ End-to-end interior solutions tailored to your needs</li>
          <li>✅ Free design consultation and 3D visualization</li>
          <li>✅ Premium material quality and finishing</li>
          <li>✅ Transparent pricing with zero hidden costs</li>
          <li>✅ Timely project delivery and post-installation support</li>
        </ul>

        <h3 className="sub-title">Our Core Services</h3>
        <div className="services-grid">
          {/* Modular Kitchen */}
          <div className="service-card">
            <img src={Kitchen} alt="Modular Kitchen" className="service-image" />
            <h4>Modular Kitchen</h4>
            <p>Designs that combine functionality and aesthetics. Includes chimney, hob setup, storage optimization, and custom finishes.</p>
          </div>

          {/* Bedroom Design */}
          <div className="service-card">
            <img src={bedroom} alt="Bedroom Design" className="service-image" />
            <h4>Bedroom Interiors</h4>
            <p>Relaxing spaces with stylish wardrobes, false ceilings, wallpapers, and cozy lighting — built for comfort and elegance.</p>
          </div>

          {/* Living Room */}
          <div className="service-card">
            <img src={livingroom} alt="Living Room Design" className="service-image" />
            <h4>Living Room Design</h4>
            <p>Elegant setups with wall-mounted TV units, paneling, seating design, ambient lights, and personalized decor.</p>
          </div>

          {/* Full Home Interiors */}
          <div className="service-card">
            <img src={fullhome} alt="Full Home Interiors" className="service-image" />
            <h4>Full Home Interiors</h4>
            <p>From layout to furniture, we handle it all — kitchen, bedroom, living, pooja room, partitions, wall decor & more.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

