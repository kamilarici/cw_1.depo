import React from "react";
import FilmYear from "./FilmYear";
import FilmInfo from "./FilmInfo";
import { data } from "../helper/data";
const Home = () => {
  console.log(data);
  return (
    <div className="d-flex gap-5 p-3">
      <FilmYear data={data} />
      <FilmInfo data={data} />
    </div>
  );
};

export default Home;
