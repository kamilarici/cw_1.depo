const CardContainer = (props) => {
  const { name, img } = props;
  console.log(name);
  return (
    <div>
      <img className="card-img" src={img} alt="" />
      <p p-card>{name}</p>
    </div>
  );
};

export default CardContainer;
