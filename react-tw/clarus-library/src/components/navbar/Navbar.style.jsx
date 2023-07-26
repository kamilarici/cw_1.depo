import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #dcdbdbd0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
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

  cursor: pointer;
  text-decoration: none;
  color: rgb(139, 126, 116);
  transition: all 0.3s ease-in 0s;
  font-size: 18px;
  font-weight: bold;
`;

export const H1 = styled.h1`
  color: darkslategray;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const NavLinkDiv = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
