import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <div className="home-bgImg-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
