import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex flex-wrap gap-3 mt-5 justify-content-center img-thumbnail">
      {data?.map((item) => {
        const { image, price, title } = item;
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{price}</Card.Title>
              <Card.Text>{title}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductCard;
