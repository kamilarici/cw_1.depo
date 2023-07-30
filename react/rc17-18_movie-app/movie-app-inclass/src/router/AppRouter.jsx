import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  const [userNameLogin, setUserNameLogin] = useState("");
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
        </Route>
        <Route
          path="/login"
          element={<Login setUserNameLogin={setUserNameLogin} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
