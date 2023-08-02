import React from "react";
import WomanImg from "../img/woman_hero.png";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px]  bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col">
          <div>
            <div>new trend</div>
          </div>
        </div>
        <h1>
          AUTUMN SALE STYLISH <br />
          <span>WOMENS</span>
        </h1>
        <div className="hidden lg:block">
          <img className="" src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
