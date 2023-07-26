import React, { useContext } from "react";
import NavStyled, { H1, LinkStyled, NavLinkDiv } from "./Navbar.style";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <NavStyled>
      <div onClick={() => navigate("/")}>
        <H1>CLARUS LİBRARY</H1>
      </div>
      <NavLinkDiv>
        <LinkStyled to="/">HOME</LinkStyled>
        <LinkStyled to="/about">ABOUT</LinkStyled>
        {!user && <LinkStyled to="/register">REGİSTER</LinkStyled>}

        <LinkStyled to="/login">{user ? "LOGOUT" : "LOGİN"}</LinkStyled>
      </NavLinkDiv>
    </NavStyled>
  );
};

export default Navbar;
