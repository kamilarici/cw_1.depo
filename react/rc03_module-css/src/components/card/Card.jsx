import Button from "../button/Button";
import "./Card.css";

const Card = ({ id, img, btn, lang }) => {
  return (
    <div>
      <h1>{lang}</h1>
      <img src={img} alt="" />
      {/* <h2>{btn}</h2> */}
      <Button btn={btn} />
    </div>
  );
};

export default Card;
