import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="mainNav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutUs">About</NavLink>
      <NavLink to="/history">History</NavLink>
      {/* <Link to="/">Home</Link>
      <Link to="/aboutUs">About</Link> */}
    </nav>
  );
};

export default Navbar;
