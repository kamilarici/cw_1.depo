import { useState } from "react";
import AuthContext from "./context/auth-context";
import Auth from "./Auth";

function App() {
  const [value, setValue] = useState(0);

  const handlClick = () => {
    setValue(value + 1);
  };
  return (
    <AuthContext.Provider>
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
