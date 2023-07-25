import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { GlobalStyles } from "../styles/Global.styles";

const AppRouter = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
