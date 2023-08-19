import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);

  // const currentUser = true
  //? user varsa child göster
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
