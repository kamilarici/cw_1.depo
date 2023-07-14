import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {}, []);
  return (
    <div>
      <button>show/hide</button>
    </div>
  );
};

export default UseEffectHook;
