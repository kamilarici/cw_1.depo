import { useState } from "react";
import AuthContext from "./context/auth-context";
import Auth from "./Auth";

function App() {
  const [value, setValue] = useState(0);
  const [authStatus, setAuthStatus] = useState(false);

  const handlClick = () => {
    setValue(value + 1);
  };
  const loginAuth = () => {
    setAuthStatus(true);
  };
  return (
    <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
