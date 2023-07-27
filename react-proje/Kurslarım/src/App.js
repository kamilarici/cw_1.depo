import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="Apprrr">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
