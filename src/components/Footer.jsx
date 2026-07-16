import React from "react";
import { Link } from "react-router-dom";
import "../styles/shared.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-main">
        <div className="footer-brand">
          <span className="footer-mark">LDS</span>
          <div>
            <strong>Luxury Drive Studio</strong>
            <p>A considered collection of exceptional automobiles.</p>
          </div>
        </div>
        <div className="footer-columns">
          <nav className="footer-column" aria-label="Explore">
            <span>Explore</span>
            <Link to="/">Home</Link>
            <Link to="/cars">Collection</Link>
            <Link to="/cars/bmw-series-table">Series guide</Link>
          </nav>
          <nav className="footer-column" aria-label="Client services">
            <span>Client services</span>
            <Link to="/contact">Private concierge</Link>
            <Link to="/cars/new-models">New models</Link>
            <Link to="/cars/luxury-collection">Luxury collection</Link>
          </nav>
          <nav className="footer-column" aria-label="Connect">
            <span>Connect</span>
            <a href="https://www.bmw.com" target="_blank" rel="noopener noreferrer">BMW.com ↗</a>
            <a href="https://www.instagram.com/bmw" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            <a href="https://www.linkedin.com/company/bmw" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </nav>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {year} Luxury Drive Studio.</span>
        <span>Independent automotive showcase · Beirut</span>
      </div>
    </footer>
  );
};

export default Footer;
