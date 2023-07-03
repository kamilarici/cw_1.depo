import CardStyle from "../scss/card.module.scss";
//? scss ve module css birleştirdik
const Card = ({ data }) => {
  console.log(data);
  //? js
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        //? JS
        const { id, name, job, img, comment } = item;
        return (
          //? module css dolayısıyla bu şekilde style verdik
          <div key={id} className={CardStyle.card}>
            <h1>{name}</h1>
            <h3>{job}</h3>
            <p>{comment}</p>
            <img src={img} alt={img} />
            <div className={CardStyle.buttons}>
              <button className={CardStyle.small}>Small</button>
              <button className={CardStyle.large}>Large</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
