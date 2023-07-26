import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState("");
  const values = {
    user,
    setUser,
    dark,
    setDark,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
