import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* h1 {
    padding: 1rem 0px;
    color: darkslategray;
    text-decoration: none;
    font-weight: 800;
    font-size: 2rem;
  } */
`;

export default NavStyled;

export const LinkStyled = styled(NavLink)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: rgb(139, 126, 116);
  transition: all 0.3s ease-in 0s;
  font-size: 24px;
`;

export const H1 = styled.h1`
  padding: 1rem 0px;
  color: darkslategray;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
`;
