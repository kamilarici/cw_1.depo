import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  // ?onclik dışarıda tanımlı hali
  const increase = () => {
    setCount(1);
  };
  return (
    <div>
      <h1>{count}</h1>
      {/* //? direk buton içine yazıldı */}
      <button onClick={() => setCount(count - 1)}>decrease</button>
      {/* //?fonsiyon da tanımlayabiliriz */}
      <button onClick={increase}>increase</button>
    </div>
  );
};

export default Counter;
