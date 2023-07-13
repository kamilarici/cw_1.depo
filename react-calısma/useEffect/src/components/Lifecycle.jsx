import { useState } from "react";
import Test from "./Test";

const Lifecycle = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "gizle" : "göster"}
      </button>
      {show && <Test />}
    </div>
  );
};

export default Lifecycle;
