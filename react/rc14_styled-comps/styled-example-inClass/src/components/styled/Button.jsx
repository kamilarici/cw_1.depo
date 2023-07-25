import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "#B03C54" : "white")};
  color: ${({ primary }) => (primary ? "white" : "#B03C54")};
  padding: 1rem 1.2rem;
  border-radius: 5px;
  margin-right: 0.5rem;
`;

export default Button;
