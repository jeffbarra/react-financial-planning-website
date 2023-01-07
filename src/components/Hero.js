import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="hero-content">
          <h1>Money Doesn't Come With Instructions</h1>
          <p>Let Us Be Your Guide</p>
          <div className="hero-btn-wrapper">
            <button className="hero-button">Free Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
