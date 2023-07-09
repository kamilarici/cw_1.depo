import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("state güncellendi");
  });
  useEffect(() => {
    console.log("component mount edildi");
  }, []);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>click</button>
    </div>
  );
}

export default App;
