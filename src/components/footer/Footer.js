import React from 'react';
import footerLogo from '../../images/footer-logo.png';
import './Footer.css';

const Footer = () => {
  return(
    <footer className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
      <div className="text-center">
        <img src={footerLogo} alt="Footer Logo"/>
      </div>
    </footer>
  )
}

export default Footer;
