import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const Charts = () => {
  const { sales } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: item.createds,
    quantity: item.quantity,
    price: Number(item.price_total),
  }));

  console.log(salesData);
  return (
    <Card>
      <Title>Total Sales</Title>
      <LineChart
        className="mt-4"
        data={salesData}
        index="date"
        categories={["quantity", "price"]}
        colors={["red", "blue"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};
export default Charts;
