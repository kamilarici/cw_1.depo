import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";

const Purchases = () => {
  const { getStockData } = useStockCall();

  //?bunu clg (15.satır)ile gelen purchases görelim diye yazdık
  const { purchases } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("purchases");
  }, []);
  console.log(purchases);
  return <div>Purchases</div>;
};

export default Purchases;
