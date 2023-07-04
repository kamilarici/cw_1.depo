import { data } from "../../helpers/data";
import Card from "./Card";
console.log(data);

const Main = () => {
  return (
    <div className="container">
      {data.map((item) => {
        return <Card {...item} />;
      })}
      <p>card container</p>
    </div>
  );
};
export default Main;
