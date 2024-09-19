import React, { useState } from 'react';
import './AppBar.css';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="free-nav-container"></div>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Logo</h1>
        </div>

        {/* Menu links (Desktop and larger screens) */}
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Testimonials</a>
        </div>

        {/* Button (Desktop and larger screens) */}
        <div className="navbar-contact">
          <button>Contact Us</button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Visible when `isOpen` is true) */}
      <div className={`navbar-mobile-links ${isOpen ? 'open' : ''}`}>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Testimonials</a>
        <button className="mobile-contact">Contact Us</button>
      </div>
    </nav>
  );
};
export default AppBar;
