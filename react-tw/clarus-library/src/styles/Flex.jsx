import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  align-items: center;
  gap: 1rem;

  background-color: ${({ bg }) => bg || "transparent"};
  /* width: 100vw;
  height: 100vh; */
  /* height: calc(100vh - 68px); */
  /* margin: 1rem auto; */
  /* background-color: ${(props) => props.bg || "transparent"}; */
  /* background-color: ${({ bg }) => bg || "transparent"}; */
`;

export const LoginFlexDiv = styled(FlexDiv)`
  background-image: url(${({ pic }) => pic && pic});
  /* background-color: #cccccc; */
  /* height: calc(100vh - 1px); */
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export default FlexDiv;
