import React from "react";
import { menuIcon } from "../../helper/iconData";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Clarus Library</Logo>
      <HamburgerIcon>{menuIcon}</HamburgerIcon>
      <Menu>
        <MenuLink>Home</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
