// src/App.jsx
import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

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
          <img src="burger.jpg" alt="Burger" />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <p className="product-name">{product.title}</p>
            <button className="price-btn">${product.price}</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
