import React from "react";
import { CardDiv } from "./Card.style";
import CardWrapper from "./Card.style";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <CardWrapper>
      {data?.map((item) => {
        // const { volumeInfo: { title, imageLinks: { smallThumbnail } } } = item;
        return (
          <CardDiv>
            <h1>{item.volumeInfo.title}</h1>
            <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" />
            <button
              onClick={() => navigate(`/detail/${item.id}`, { state: item })}
            >
              VİEW MORE
            </button>
          </CardDiv>
        );
      })}
    </CardWrapper>
  );
};

export default Card;
