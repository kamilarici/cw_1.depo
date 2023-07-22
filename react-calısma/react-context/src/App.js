import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [team, setTeam] = useState("light");
  return (
    <div className="App">
      <Header team={team} />
      <Footer setTeam={setTeam} team={team} />
    </div>
  );
}

export default App;
