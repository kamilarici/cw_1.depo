import LifeCycleMethods from "./components/LifeCycleMethods";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="container text-center mt-4">
      <button className="btn btn-danger" onClick={() => setVisible(!visible)}>
        Show/Hide
      </button>

      {visible && <LifeCycleMethods />}
    </div>
  );
}

export default App;
