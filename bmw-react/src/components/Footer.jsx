import React from 'react';
import '../styles/shared.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 BMW AG. All rights reserved.</p>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="https://www.bmw.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Official Website</a>
        <a href="https://www.instagram.com/bmw" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
        <a href="https://www.linkedin.com/company/bmw" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
