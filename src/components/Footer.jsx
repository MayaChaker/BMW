import React from "react";
import "../styles/shared.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-inner">
        <p>
          &copy; {year} Luxury Drive Studio.
          <br />
          BMW All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://www.bmw.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website
          </a>
          <a
            href="https://www.instagram.com/bmw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/bmw"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
