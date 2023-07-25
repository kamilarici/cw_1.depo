import React from "react";
import { FormLogin } from "./Login.style";
import FlexDiv from "../../styles/Flex";

const Login = () => {
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
