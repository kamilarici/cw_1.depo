import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

const PrivateRouter = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
