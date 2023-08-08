import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
