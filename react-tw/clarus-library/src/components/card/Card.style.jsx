import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  flex-wrap: wrap;
`;

export default CardWrapper;

export const CardDiv = styled.div`
  flex-direction: column;
  height: 20rem;
  width: 20rem;

  max-width: 20rem;
  max-height: 20rem;
  background: white;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px 1px;
  display: flex;

  justify-content: center;

  align-items: center;
  h1 {
    font-size: 1.2rem;
    text-align: center;
    overflow: hidden;
    height: 5rem;
  }
  img {
    min-height: 10rem;
    max-height: 10rem;
    border-radius: 10px;
  }
  button {
    font-weight: bold;
    padding: 0.7rem;
    outline: none;
    border: none;
    margin: 0.5rem;
    border-radius: 3px;
    cursor: pointer;
    background: rgb(134, 200, 188);
    color: rgb(5, 5, 5);
  }
`;
