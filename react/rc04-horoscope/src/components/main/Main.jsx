import { data } from "../../helpers/data";
import Card from "./Card";
import "./Main.scss";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => {
        //?key göndermemiz gerekiyor çünkü bunu react yazmamızı istiyor.dom da yazmasa bile yazmamız gerekiyor
        //?spread operatörü ile açarak da yollayabiliriz yolladığımız yerde clg yaparak gelenlerin açıldığını görebiliriz
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Main;
