import React from "react";
import HeaderStyled from "./styled/HeaderStyled";
import Button from "./styled/Button";
import Image from "./styled/Image";

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          blanditiis id. Culpa, vero quis? Non libero obcaecati praesentium quis
          quos veniam magnam ullam fugit animi illo nulla pariatur minus harum
          eius neque, aliquid quaerat laborum.
        </p>
        <Button primary>start</Button>
      </div>
      <Image src="./images/hero.jpg" />
    </HeaderStyled>
  );
};

export default Header;
