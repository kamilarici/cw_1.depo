import React from "react";
import { useContext } from "react";
import { FormLogin } from "./Login.style";
import FlexDiv from "../../styles/Flex";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  return (
    <FlexDiv bg="#bebe">
      <FormLogin>
        <h1>lOGIN HERE</h1>
        <input type="text" placeholder="USERNAME" required />
        <input type="password" placeholder="PASSWORD" required />
        <button type="submit">LOGIN</button>
      </FormLogin>
    </FlexDiv>
  );
};

export default Login;
