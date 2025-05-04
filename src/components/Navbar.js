import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaInfoCircle, FaThList, FaConciergeBell, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Vishal Interior</div>
      <div className="menu-icon" onClick={() => setIsOpen(o => !o)}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
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
