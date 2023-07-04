const Card = (props) => {
  console.log(props);
  return (
    <div className="cards">
      <div className="title">
        <h1>title</h1>
        <div className="date">
          <h2>date</h2>
        </div>
        <img src="" alt="" />
        <div className="card-over">
          <p>descripsion</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
