import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#demo">Demo</a>
          </li>
        </ul>
        <div className="footer-logo">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="social-icons">
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="bottom">
          <span className="underline"></span>
          <p>
            © {new Date().getFullYear()} Execute Financial, Inc. All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
