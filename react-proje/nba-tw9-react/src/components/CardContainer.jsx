import { useState } from "react";

const CardContainer = (props) => {
  const { name, img, statistics } = props;

  return (
    <div>
      <img className="card-img" src={img} alt="" />
      {/* <p className="card-img">{statistics}</p> */}
      <p p-card>{name}</p>
    </div>
  );
};

export default CardContainer;
