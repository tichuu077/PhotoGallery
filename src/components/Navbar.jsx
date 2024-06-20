// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          PhotoGallery
        </Link>
        <div className="navbar-menu">
          <Link to="/upload" className="navbar-item">
            Upload
          </Link>
          <Link to="/gallery" className="navbar-item">
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
