import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Login = ({ setUserNameLogin, logout }) => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      userCredential.user.displayName &&
        setUserNameLogin(userCredential.user.displayName);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      alert("Please Register...");
      navigate("/register");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form
          className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]"
          onSubmit={handleSubmit}
        >
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Log In
          </h2>
          <div>
            <input
              name="floating_email"
              type="email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div>
            <input
              name="floating_password"
              type="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
            <div className="flex justify-between links-a font-[0.75em] cursor-pointer decoration-none text-[#8f8f8f] mt-3">
              <span role="button" className="hover:text-red-main">
                Forgot Password
              </span>
              <Link to={"/register"} className="text-red-main">
                Sing Up
              </Link>
            </div>
          </div>
          <button type="submit" className="btn-danger">
            Login
          </button>

          <button
            type="button"
            className="btn-danger flex justify-between items-center"
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
          <button type="button" className="text-white" onClick={logout}>
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
