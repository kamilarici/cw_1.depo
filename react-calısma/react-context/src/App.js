import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MainContext } from "./context";

function App() {
  const [team, setTeam] = useState("light");

  const data = {
    team,
    setTeam,
  };
  return (
    <MainContext.Provider value={data} className="App">
      <Header />
      <Footer />
    </MainContext.Provider>
  );
}

export default App;
