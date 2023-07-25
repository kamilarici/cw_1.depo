import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  width: 55%;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(15, 63, 42, 0.36);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;
  border: 1px solid rgba(15, 63, 42, 0.3);
  margin: 20px;
  gap: 20px 0;
  padding: 1rem 1rem;
  input {
    height: 3rem;
    width: 55%;
    border: none;
    border-radius: 1rem 3px 3px 1rem;
    text-indent: 10px;
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
  select {
    border-radius: 3px 1rem 1rem 3px;
    padding: 5px;
    height: 3rem;
    width: 40%;
    border: none;
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.8);
  }
  button {
    background-color: rgb(225, 241, 221);
    padding: 5px;
    height: 3rem;
    border: none;
    margin: 0 1rem;
    border-radius: 1rem 3px;
    cursor: pointer;
    font-size: 2rem;
  }
`;

export default FormStyle;

export const FormDiv = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivImg = styled.img`
  width: 45%;
  height: 60%;
  border-radius: 10px;
  object-fit: cover;
`;
