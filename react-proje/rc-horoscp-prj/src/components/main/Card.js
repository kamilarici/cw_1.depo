import CardStyle from "./card.module.scss";

const Card = ({ id, title, desc, date, image }) => {
  return (
    <div className={CardStyle["container"]} key={id}>
      <div className={CardStyle["Cards"]}>
        <div className={CardStyle.title}>
          <h1>{title}</h1>
        </div>
        <img className={CardStyle["img"]} src={image} alt="" />
        <h2 className={CardStyle["date"]}>{date}</h2>
        <p className={CardStyle.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
