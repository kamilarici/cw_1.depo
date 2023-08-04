import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mt-5">
      <Home />
    </div>
  );
}

export default App;
