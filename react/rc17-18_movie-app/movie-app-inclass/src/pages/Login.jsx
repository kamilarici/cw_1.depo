import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { Link } from "react-router-dom";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = ({ setUserNameLogin }) => {
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
      // console.log(userCredential.user.displayName);
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div>
      <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
        <div
          className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
        >
          <form
            onSubmit={handleSubmit}
            className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]"
          >
            <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
              log in
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
              <div className="flex justify-between mt-3">
                <span
                  role="button"
                  className=" text-gray-400 hover:text-red-main"
                >
                  Forgor Pasword
                </span>
                <Link to="/register" className="text-red-main ">
                  Sign up
                </Link>
              </div>
            </div>
            <button type="submit" className="btn-danger">
              login
            </button>
            <button
              type="button"
              className="btn-danger flex justify-between items-center"
            >
              Continue with Google
              <GoogleIcon color="currentColor" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
