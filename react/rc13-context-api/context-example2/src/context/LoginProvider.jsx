import { createContext, useState, useContext } from "react";

//! 1- Login Context'i olusuturuldu
const LoginContext = createContext();

//! 2-Sarmalayici (Provider) Component
const LoginProvider = ({ children }) => {
  // //! Local State
  const [user, setUser] = useState({ email: "", password: "" });

  const values = {
    user,
    setUser,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//! 3- consuming custom hook
//? burada kendi hookumuzu yazdık 2 işlemi tek işleme düşürdük

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
