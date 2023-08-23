import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <button id="navbtn">
            <a href="/">Home</a>
          </button>
          <button id="navbtn">
            <a href="/about">Offers</a>
          </button>
          <button id="navbtn">
            <a href="/services">Shop</a>
          </button>
        </ul>
      </div>
      <div className="navbar-logo">
        <a href="/">Your Brand</a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <button id="navbtn">
            <a href="/services">Contact us</a>
            <img src="./assets/images/phone.svg" />
          </button>
          <button id="navbtn">
            <a href="/contact">Cart</a>
            <img src="./assests/images/cart.svg" />
          </button>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
      </div>
    </nav>
  );
}

export default Navbar;
