import styled from "styled-components";

const AboutDiv = styled.div`
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid red;

  background-color: rgb(255, 241, 221);
  color: rgb(5, 5, 5);
  width: 60%;
  h2 {
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  h3 {
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  h4 {
    line-height: 2rem;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
`;

export default AboutDiv;

export const IconDiv = styled.div`
  margin: 2rem;
  font-size: 2rem;
  i {
    margin-right: 15px;
    transition: all 0.6s;
    &:hover {
      color: salmon;
      transform: scale(1.1);
    }
  }
`;
