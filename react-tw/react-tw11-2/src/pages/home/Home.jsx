import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div>
      <main className="home">
        <h2>Hi! My Name Is</h2>
        <h1 className="home__name">
          Kamil <span className="home__name--last">ARICI</span>
        </h1>
        <h2>Frontend Web Developer</h2>
      </main>
    </div>
  );
};

export default Home;
