import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Todos from "./pages/Todos";
import Comments from "./pages/Comments";
import Posts from "./pages/Posts";
import axios from "axios";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=20")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <div className="container">
        {/* HEADER */}
        <header className="header">
          <h1 className="logo">STREET88</h1>
          <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Menu</NavLink>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <h2>Welcome to Street88</h2>
            <p>The best street food experience awaits you!</p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/todos" element={<Todos />} />
            <Route path="/about/comments" element={<Comments />} />
            <Route path="/about/posts" element={<Posts />} />
          </Routes>
        </main>

        {/* CARDS SECTION */}
        <section className="cards">
          {products.length > 0 ? (
            <div className="grid">
              {products.map((product) => (
                <div key={product.id} className="card">
                  <img src={product.image} alt={product.title} className="card-image" />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading products...</p>
          )}
        </section>
      </div>
    </Router>
  );
}

export default App;
