import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(8, 7, 16, 0.6) 0px 0px 40px;
  padding: 2rem;
  color: rgb(255, 255, 255);
  letter-spacing: 0.5px;

  input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    border: none;
  }

  button {
    margin-top: 50px;
    background-color: white;
    color: darkslategray;
    padding: 15px 0px;
    opacity: 0.5;
    font-size: 18px;
    font-weight: 600;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      opacity: 1;
    }
  }
`;
