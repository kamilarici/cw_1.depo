import { createContext, useContext } from "react";
import A from "./components/A";
export const UserContext = createContext();
function App() {
  return (
    <div>
      <UserContext.Provider value={"ali"}>
        <h1>app</h1>

        <A />
      </UserContext.Provider>
    </div>
  );
}

export default App;
