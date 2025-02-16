import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">STREET88</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#">Menyu</a>
        <a href="#">O‘nas</a>
        <a href="#">Kontakt</a>
      </div>
    </nav>
  );
};

export default Navbar;
