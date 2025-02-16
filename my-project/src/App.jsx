// src/App.jsx
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <h1 className="logo">STREET88</h1>
        <nav className="nav">
          <a href="#">MENYU</a>
          <a href="#">O‘ NAS</a>
          <a href="#">KONTAKTY</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h2>BOL‘SHOY GAMBURGER</h2>
          <p>GOVYADINA</p>
          <button className="price-btn">14 500</button>
        </div>
        <div className="hero-image">
          <img src="./imgs/burger.png" alt="Burger" />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <div className="card">
          <img src="./imgs/bur.png" alt="Burger 1" />
          <p className="product-name">S GOVYADINOY</p>
          <button className="price-btn">14 500</button>
        </div>
        <div className="card">
          <img src="./imgs/bur.png" alt="Burger 2" />
          <p className="product-name">S GOVYADINOY</p>
          <button className="price-btn">14 500</button>
        </div>
        <div className="card">
          <img src="./imgs/bur.png" alt="Burger 3" />
          <p className="product-name">S GOVYADINOY</p>
          <button className="price-btn">14 500</button>
        </div>
      </section>
    </div>
  );
}

export default App;
