import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/sidebar.png'; // ✅ yaha image import hua

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Interior Logo" /> {/* ✅ imported image yaha use ki */}
          <p>Where every corner speaks elegance — smart, modern interiors that don’t just decorate a space, they define your lifestyle.</p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaPhoneAlt /> +91 9557922701</p>
          <p><FaEnvelope /> ajaysharma9870777@gmail.com</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/terms">Terms & Conditions</a>
          <div className="social-icons">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} InteriorSpace. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
