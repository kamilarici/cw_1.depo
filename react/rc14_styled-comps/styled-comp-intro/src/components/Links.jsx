import styled, { css } from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  &:hover {
    color: tomato;
  }
  ${({ react }) =>
    react &&
    css`
      background-color: black;
      color: turquoise;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    `}
`;

export default StyledLink;
