import styled from "styled-components";
export const FormDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;
const FormStyle = styled.form`
  display: flex;
  width: 55%;
  max-width: 690px;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(15, 63, 42, 0.36);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;
  border: 1px solid rgba(15, 63, 42, 0.3);
  margin: 20px;
  gap: 20px 0;
  padding: 1.4rem 1rem;
  input {
    height: 3rem;
    width: 55%;
    border: none;
    border-radius: 1rem 3px 3px 1rem;
    text-indent: 10px;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
  select {
    border-radius: 3px 1rem 1rem 3px;
    padding: 5px;
    height: 3rem;
    width: 40%;
    border: none;
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, 0.8);
  }
  button {
    background-color: rgb(225, 241, 221);
    padding: 7px;
    height: 3rem;
    border: none;
    margin: 0 1rem;
    border-radius: 1rem 3px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 1s;
    &:hover {
      background-color: white;
    }
  }
`;
export const DivImg = styled.img`
  height: 60%;
  width: 45%;
  object-fit: cover;
  border-radius: 20px;
`;
export default FormStyle;
