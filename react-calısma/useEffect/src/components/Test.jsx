import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log("component ilk yüklendiğinde");
  }, []);
  useEffect(() => {
    console.log("component render oldu");
  });
  return (
    <div>
      <h1>conponent gösterildi</h1>
    </div>
  );
};

export default Test;
