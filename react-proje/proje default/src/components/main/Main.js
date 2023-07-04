import Card from "./Card";
import data from "../../helper/data";
import MainStyle from "./main.module.scss";

const Main = () => {
  return (
    <div className={MainStyle.main}>
      {data.map((items) => {
        const { id, image, desc, title, date } = items;
        return (
          <Card id={id} image={image} desc={desc} title={title} date={date} />
        );
      })}
    </div>
  );
};

export default Main;
