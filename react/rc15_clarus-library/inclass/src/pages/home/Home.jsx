import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import { CardContainer, HomeContainer, HomeImage } from "./Home.style";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeImage></HomeImage>
      <CardContainer>
        <Card />
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;
