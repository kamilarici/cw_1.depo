import 



const Card = ({ id, title, desc, date, image }) => {
  return (
    <div key={id}>
      <div>
        <h1>{title}</h1>
      </div>
      <img src={image} alt="" />
      <h2>{date}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
