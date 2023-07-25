import styled from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default NavStyled;
