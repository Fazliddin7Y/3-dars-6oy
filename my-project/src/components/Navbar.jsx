// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Menu</NavLink>
      <NavLink to="/about/todos">Todos</NavLink>
      <NavLink to="/about/comments">Comments</NavLink>
      <NavLink to="/about/posts">Posts</NavLink>
    </nav>
  );
};

export default Navbar;
