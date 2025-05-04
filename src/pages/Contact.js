import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css'; // Link to CSS below
import logo from '../assets/sidebar.png'; // Replace with your actual logo path

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={logo} alt="Company Logo" className="contact-logo" />

      <h2 className="contact-heading">Get in Touch</h2>

      <div className="contact-options">
        <a href="mailto:yourcompany@example.com" className="contact-link" target="_blank" rel="noreferrer">
          <FaEnvelope className="icon" />
          yourcompany@example.com
        </a>

        <a href="https://wa.me/919999999999" className="contact-link" target="_blank" rel="noreferrer">
          <FaWhatsapp className="icon" />
          Message us on WhatsApp
        </a>

        <a href="tel:+919999999999" className="contact-link" target="_blank" rel="noreferrer">
          <FaPhoneAlt className="icon" />
          +91 99999 99999
        </a>
      </div>
    </div>
  );
};

export default Contact;
