import React from "react";
import BurgerLogo from "../assets/9.png";
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
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletisim</Link>
      </div>
    </div>
  );
};

export default Navbar;
