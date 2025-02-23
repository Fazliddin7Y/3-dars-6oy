import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <h2>About Page</h2>
      <nav className="sub-nav">
        <NavLink to="/about/todos">Todos</NavLink>
        <NavLink to="/about/comments">Comments</NavLink>
        <NavLink to="/about/posts">Posts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;
