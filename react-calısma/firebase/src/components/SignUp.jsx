import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      console.log("auth:", auth);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h3> Register User </h3>
      <input
        placeholder="Email..."
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <input
        placeholder="Password..."
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      />

      <button onClick={register}> Create User</button>
    </div>
  );
};

export default SignUp;
