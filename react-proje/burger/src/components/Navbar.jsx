import React from "react";
import BurgerLogo from "../assets/1.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} alt="" />
      </div>
      <div className="nav-link">
        <Link to="/">Anasayfa</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">hakkımızda</Link>
        <Link to="/contact">iletisim</Link>
      </div>
    </div>
  );
};

export default Navbar;
