import React from 'react';
import footerLogo from '../../images/footer-logo.png';
import './Footer.css';

const Footer = () => {
  return(
    <footer className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
      <div className="col-lg-4 text-center">
        <p>Some Text</p>
      </div>
      <div className="col-lg-4 text-center">
        <img src={footerLogo} alt="Footer Logo"/>
      </div>
      <div className="col-lg-4 text-center">
        <p>Some Text</p>
      </div>
    </footer>
  )
}

export default Footer;
