import { useState } from "react";
import Counter from "./components/Counter";
import Lifecycle from "./components/Lifecycle";
import User from "./components/User";

function App() {
  const [isVisiable, setIsVisiable] = useState(true);
  return (
    <div className="App">
      <h1>useeffect</h1>
      {/* {isVisiable && <Counter />} */}
      <button onClick={() => setIsVisiable(!isVisiable)}>toggle</button>
      <hr /> <hr />
      <h1>liffecycle</h1>
      <Lifecycle />
      <hr />
      <hr />
      <User />
    </div>
  );
}

export default App;
