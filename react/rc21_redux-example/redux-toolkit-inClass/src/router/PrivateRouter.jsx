import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  // const user = true
  //? consuming
  const user = useSelector((state) => state.auth.user);

  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
