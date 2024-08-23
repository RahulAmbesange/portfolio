import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>About Me</h4>
          <p>
            I'm a passionate developer who loves creating dynamic and interactive web applications.
            Let's connect and collaborate!
          </p>
        </div>
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Follow Me</h4>
          <div className="footer-icons">
            <span>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rahul Ambesange. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
