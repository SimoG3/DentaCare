import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Cabinet */}
        <div className="navbar-logo">
          <Link to="/">
          <img
            src="/src/assets/tooth.png"
            alt="Cabinet Logo"
            className="navbar-logo-img"
          />
          </Link>
        </div>

        {/* Hamburger */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        {/* Links */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>

          <li
          className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-toggle">Soins et spécialités</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/blanchiment">Blanchiment</Link></li>
                <li><Link to="/prothese">Prothèse</Link></li>
                <li><Link to="/soins">Soins</Link></li>
                <li><Link to="/chirurgie">Chirurgie</Link></li>
                <li><Link to="/orthodontie">Orthodontie</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="#footer" onClick={closeMenu}>Contactez-nous</Link></li> {/* !!!! make it scroll to footer*/}
          <li><Link to="https://maps.app.goo.gl/8dwbe9brFPp2HtYV9" onClick={closeMenu}>Localisation</Link></li>
          <li><Link to="/reservation" className="navbar-button" onClick={closeMenu}>Rendez-vous</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
