// src/components/HeroSection.jsx
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    
    <section className="hero">
      <div className="hero-text">
        <h1>BOL'SHOY GAMBURGER</h1>
        <p>GOVYADINA</p>
        <button className="order-btn">14 500</button>
      </div>
      <div className="hero-image">
        <img src="./imgs/burger.png" alt="Burger" />
      </div>
    </section>
  );
};

export default HeroSection;
