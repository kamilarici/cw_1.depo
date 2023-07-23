// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import { useContext } from "react";
import ProducContext from "../context/ProducContext";

const ProductCard = () => {
  const { data } = useContext(ProducContext);
  console.log(data);
  return (
    <div className="container d-flex flex-wrap gap-5 mt-5 justify-content-center ">
      {data?.map((item, i) => {
        const { image, price, title } = item;
        return (
          <div key={i} className="card p-2 " style={{ width: "18rem" }}>
            <div className="img-card border border-gray">
              <img src={image} className="card-img-top" alt="all" />
            </div>
            <div className="card-price">
              <p className="card-text">{price} $</p>
            </div>
            <div className="card-cover">
              <h5 className="card-title">{title}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
