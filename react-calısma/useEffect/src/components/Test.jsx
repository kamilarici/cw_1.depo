import { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component ilk yüklendiğinde");
    return () => console.log("component destoreyed");
  }, []);
  useEffect(() => {
    console.log("component render oldu");
  });
  useEffect(() => {
    console.log("count değeri değişti:", { count });
  }, [count]);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>artır</button>
      <h1>conponent gösterildi</h1>
    </div>
  );
};

export default Test;
