import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";

const Sales = () => {
  const { getStockData } = useStockCall();
  //?bunu clg (15.satır)ile gelen purchases görelim diye yazdık
  const { sales } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("sales");
  }, []);
  console.log(sales);
  return <div>Sales</div>;
};

export default Sales;
