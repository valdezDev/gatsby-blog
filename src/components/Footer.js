import React from 'react';

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">
      Paul's Code Blog
    </h4>
    <p className="text-center">Follow Me!</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
          <i className="fab fa-facebook-f fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
          <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="google">
          <i className="fab fa-google fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/valdezdev/" target="_blank" rel="noopener noreferrer" className="linkedin">
          <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/valdezDev" target="_blank" rel="noopener noreferrer" className="github">
          <i className="fab fa-github fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer;