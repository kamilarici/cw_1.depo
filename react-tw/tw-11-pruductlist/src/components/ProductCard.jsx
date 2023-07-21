import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ data }) => {
  console.log(data);
  return (
    <div className="container d-flex flex-wrap gap-5 mt-5 justify-content-center ">
      {data?.map((item) => {
        const { image, price, title } = item;
        return (
          <Card
            className=" img-thumbnail border border-danger text-center p-3"
            style={{ width: "22rem", height: "550px" }}
          >
            <Card.Img variant="top" src={image} className="h-75" />
            <Card.Body className="border border-danger mt-1">
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
