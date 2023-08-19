import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);

  // const currentUser = true
  //? user varsa child göster
  //? user yoksa home yoll
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
