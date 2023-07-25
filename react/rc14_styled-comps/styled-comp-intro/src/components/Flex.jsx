import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 500px;
  margin: auto;
  margin-bottom: 1rem;
  /* background-color: ${(props) => props.bg || "transparent"}; */
  background-color: ${({ bg }) => bg || "transparent"};
`;

export default Flex;
