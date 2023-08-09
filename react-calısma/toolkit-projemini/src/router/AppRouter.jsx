import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CartItem from "../pages/CartItem";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
