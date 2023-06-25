import { data } from "./data/data";

const Card = () => {
  return (
    <div>
      {data.map((item) => {
        const { name, hour, image, id } = item;
        return (
          <div className="name">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div>
              <p>
                lesson name: <span>{name}</span>
              </p>
              <p>
                lesson name: <span>{hour}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
