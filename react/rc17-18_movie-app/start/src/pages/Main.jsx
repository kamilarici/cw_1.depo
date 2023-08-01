import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Main = () => {
  const { movies } = useContext(MovieContext);
  console.log(movies);
  return <div>Main</div>;
};

export default Main;
