import React from "react";
import FlexDiv from "../../styles/Flex";
import { useLocation } from "react-router-dom";
import DetailDiv from "./Detail.style";

const Detail = () => {
  const { state } = useLocation();
  return (
    <FlexDiv bg={"#"}>
      <DetailDiv>
        <h1>{state?.volumeInfo.title}</h1>
        <img src={state?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
        <p>{state?.volumeInfo?.description}</p>
        <p>{state?.volumeInfo?.authors}</p>
        <p>{state?.volumeInfo?.publishedDate}</p>
      </DetailDiv>
    </FlexDiv>
  );
};

export default Detail;
