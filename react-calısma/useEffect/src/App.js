import { useState } from "react";
import Counter from "./components/Counter";
import Lifecycle from "./components/Lifecycle";
import UseEffect from "./components2/UseEffectHook";
import UseEffectHook from "./components2/UseEffectHook";

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
      {visible && <UseEffectHook />}
    </div>
  );
}

export default App;
