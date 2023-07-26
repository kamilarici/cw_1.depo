import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { GlobalStyles } from "../styles/Global.styles";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Detail";
import { AuthProvider } from "../context/AuthContext";

const AppRouter = () => {
  return (
    <div>
      <GlobalStyles />
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route />
          <Route path="/" element={<Home />} />

          <Route path="" element={<PrivateRouter />}>
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            {/* <Route path="/about/:id" element={<About />} /> */}
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route />
          <Route />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default AppRouter;
