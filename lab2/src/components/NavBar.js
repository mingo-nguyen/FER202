import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="navbar-brand">Pizza House</a>
        <button className="navbar-toggle" aria-controls="basic-navbar">
          <span className="navbar-toggle-icon"></span>
        </button>
        <div className="navbar-collapse" id="basic-navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;