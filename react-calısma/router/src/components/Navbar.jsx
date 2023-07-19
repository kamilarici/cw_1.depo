import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/aboutUs">About</Link>
    </nav>
  );
};

export default Navbar;
