import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
const Main = () => {
  const API_KEY = "405cd9fb67e60c3e2feae1872a93ac53";
  const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=";
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    try {
      const response = await axios(`${API_URL}${API_KEY}`);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(movies);
  return (
    <main>
      <form action="" className="flex justify-center p-2">
        <input
          type="search"
          placeholder="Search A Movie.."
          className="outline-none border w-4/12 mr-3 text-black text-lg"
        />
        <button type="submit">Search</button>
      </form>
      <div className="flex flex-wrap">
        <Cards movies={movies} />
      </div>
    </main>
  );
};
export default Main;
