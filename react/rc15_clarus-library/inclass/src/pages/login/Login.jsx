import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./Login.style";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setUser(true);
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <Header>Login Here</Header>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
