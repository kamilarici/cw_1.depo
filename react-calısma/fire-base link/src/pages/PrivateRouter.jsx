import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { FirebaseContext } from "../context/FireBaseContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(FirebaseContext);
  console.log(currentUser);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
