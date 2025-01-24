import React from 'react';
import '../App.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        
        <p>Contact us: info@kadamforward.com</p>
        <div className="footer-links">
          <a href="/faqs">FAQs</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com/kadamforward">Facebook</a>
          <a href="https://twitter.com/kadamforward">Twitter</a>
          <a href="https://linkedin.com/company/kadamforward">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;