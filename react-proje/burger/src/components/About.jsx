import React from "react";
import BannerImage from "../assets/5.jpg";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div
        className="about-top "
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        {" "}
      </div>
      <div className="about-bottom">
        <h1>HAKKIMIZDA</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid id
          facere enim voluptatem nam, doloremque asperiores, ea quos possimus
          provident et consectetur velit error debitis odit fugiat quo soluta
          ipsam! Fugit doloremque voluptatum architecto ratione expedita, Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Odio doloremque
          exercitationem magni amet unde asperiores consectetur autem nihil
          eaque enim incidunt dolor sunt sequi fuga quae architecto recusandae,
          maiores aliquid minima debitis totam quidem pariatur iste vitae!
          Laborum assumenda mollitia quos maxime adipisci voluptatum, optio
          velit in doloribus. Natus excepturi, ducimus officia doloribus sit
          neque mollitia harum. Unde voluptatem dolorum quasi, necessitatibus
          reprehenderit quae. Mollitia eligendi cum molestiae quisquam atque
          quas, debitis consequatur aliquam, corrupti harum unde laudantium?
          Dignissimos numquam amet blanditiis hic, libero corrupti dolores quas
          distinctio quam repellendus iste non fugiat nemo doloremque rem
          consequuntur! Magnam, nam ipsa! veritatis doloribus eius, id ipsum
          consectetur repellendus. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nulla iste corrupti ipsam, doloribus quas,
          doloremque numquam maiores voluptas adipisci obcaecati rerum, natus
          pariatur dolor? Debitis a reiciendis porro id repudiandae, minima in
          eum voluptatibus perspiciatis officia pariatur iste doloremque,
          obcaecati unde laudantium! Saepe non accusamus ea repellendus beatae
          tempora sit.
        </p>
      </div>
    </div>
  );
};

export default About;
