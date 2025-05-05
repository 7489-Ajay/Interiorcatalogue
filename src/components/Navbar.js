import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaInfoCircle, FaThList, FaConciergeBell, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="menu-icon" onClick={() => setIsOpen(true)}>
          ☰
        </div>

        <div className="navbar-logo">
          <span className="text-blue">vishal</span>
          <span className="text-black">Interior</span>
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <span className="close-icon" onClick={() => setIsOpen(false)}>✕</span>

        <li>
          <NavLink to="/" end onClick={() => setIsOpen(false)}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            <FaInfoCircle /> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalogue" onClick={() => setIsOpen(false)}>
            <FaThList /> Catalogue
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>
            <FaConciergeBell /> Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            <FaPhone /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

