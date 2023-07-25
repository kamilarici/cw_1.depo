import React from "react";
import NavStyled, { H1, LinkStyled } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavStyled>
      <div>
        <H1>CLARUS LİBRARY</H1>
      </div>
      <div>
        <LinkStyled to="/">HOME</LinkStyled>
        <LinkStyled to="/">ABOUT</LinkStyled>
        <LinkStyled to="/">LOGİN</LinkStyled>
      </div>
    </NavStyled>
  );
};

export default Navbar;
