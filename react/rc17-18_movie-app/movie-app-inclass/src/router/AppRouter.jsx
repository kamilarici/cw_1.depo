import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import PriviateRouter from "./PriviateRouter";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";


const AppRouter = () => {
  const [userNameLogin, setUserNameLogin] = useState("")
  const logout = () => {
    setUserNameLogin("")
  };


  return (<div>
    <Navbar userNameLogin= {userNameLogin} logout={logout}/>

    <Routes>

      <Route path="/" element={<Main userNameLogin= {userNameLogin}/>} />

      <Route element={<PriviateRouter userNameLogin={userNameLogin} />} >
        <Route path="/moviedetail/:id" element={<MovieDetail />} />
      </Route>

      <Route path="/login" element={<Login setUserNameLogin={setUserNameLogin} logout={logout}/>} />
      <Route path="/register" element={<Register />} />

    </Routes>
  </div>);
};

export default AppRouter;
