import React from "react";
import NavStyled, { H1, LinkStyled, NavLinkDiv } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavStyled>
      <div>
        <H1>CLARUS LİBRARY</H1>
      </div>
      <NavLinkDiv>
        <LinkStyled to="/">HOME</LinkStyled>
        <LinkStyled to="/about">ABOUT</LinkStyled>
        <LinkStyled to="/register">REGİSTER</LinkStyled>
        <LinkStyled to="/login">LOGİN</LinkStyled>
      </NavLinkDiv>
    </NavStyled>
  );
};

export default Navbar;
