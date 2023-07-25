import React from "react";
import { CardDiv } from "./Card.style";
import CardWrapper from "./Card.style";

const Card = ({ data }) => {
  return (
    <CardWrapper>
      {data.map((item) => {
        return (
          <CardDiv>
            <h1>{item.volumeInfo.title}</h1>
            <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" />
            <button>VİEW MORE</button>
          </CardDiv>
        );
      })}
    </CardWrapper>
  );
};

export default Card;
