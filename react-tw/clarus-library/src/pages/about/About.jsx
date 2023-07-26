import React from "react";
import AboutDiv, { IconDiv } from "./About.style";
import FlexDiv from "../../styles/Flex";
import userlogo from "../../assets/about.png";
const About = () => {
  return (
    <FlexDiv>
      <img width={"150px"} src={userlogo} alt="" />
      <AboutDiv>
        <h2>Lorem ipsum dolor sit.</h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          neque quos nesciunt eos asperiores doloribus repudiandae eveniet
          facilis soluta at! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Unde minima similique itaque dolore dicta ipsum voluptatem quas
          nam amet animi. Consectetur, similique veniam recusandae labore
          dolorem qui nesciunt commodi laboriosam. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Maxime amet commodi facilis illum
          assumenda! Odit iure ea eligendi natus assumenda. Earum ullam
          reiciendis autem qui eligendi placeat iure suscipit saepe.
        </h4>
        <IconDiv>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-instagram"></i>
        </IconDiv>
      </AboutDiv>
    </FlexDiv>
  );
};

export default About;
