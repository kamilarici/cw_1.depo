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

const AppRouter = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />

        <Route path="" element={<PrivateRouter />}>
          <Route path="/about" element={<About />} />
          {/* <Route path="/about/:id" element={<About />} /> */}
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
