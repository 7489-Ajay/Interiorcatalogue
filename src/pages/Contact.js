import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css'; 
import logo from '../assets/sidebar.png'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={logo} alt="Company Logo" className="contact-logo" />

      <h2 className="contact-heading">Get in Touch</h2>

      <div className="contact-options">
        <a href="ajaysharma987077@gmail.com" className="contact-link" target="_blank" rel="noreferrer">
          <FaEnvelope className="icon" />
          ajaysharma987077@gmail.com
        </a>

        <a href="https://wa.me/9557922701" className="contact-link" target="_blank" rel="noreferrer">
          <FaWhatsapp className="icon" />
          Message us on WhatsApp
        </a>

        <a href="tel:+919557922701" className="contact-link" target="_blank" rel="noreferrer">
          <FaPhoneAlt className="icon" />
          +91 9557922701
        </a>
      </div>
    </div>
  );
};

export default Contact;
