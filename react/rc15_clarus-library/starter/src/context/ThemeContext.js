// Theme Context
import { useState } from "react";
import { createContext, useContext } from "react";
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [myTheme, setMyTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ myTheme, setMyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export default ThemeContextProvider;
