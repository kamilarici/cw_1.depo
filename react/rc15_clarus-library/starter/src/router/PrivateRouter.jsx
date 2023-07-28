import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useAuthContext();
  // const { user } = useContext(AuthContext); // böyle uzun yazıp iki import yapmak yerine custom hook yazarak tek importla contexti ku llanabiliyoruz.
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
