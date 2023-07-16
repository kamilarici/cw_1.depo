import { useState } from "react";
import AuthContext from "./context/auth-context";
import Auth from "./Auth";

function App() {
  const [value, setValue] = useState(0);

  const handlClick = () => {
    setValue(value + 1);
  };
  const loginAuth = () => {
    console.log("metodu tetikledim");
  };
  return (
    <AuthContext.Provider value={{ status: false, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
