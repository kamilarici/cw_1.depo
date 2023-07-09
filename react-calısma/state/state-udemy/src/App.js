import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <button onClick={handleClick}>kurs ekle</button>
      <div>kurs sayısı:{value}</div>
    </div>
  );
}

export default App;
