import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
const Main = () => {
  const API_KEY = "b1ad040c8b59ee92603839b9fbbe4adf";
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=`
    );
    const [movies, setMovies] = useState();
    const [query, setQuery] = useState();


    
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${}`
  const getData = async () => {
    try {
      const response = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
      );
      setMovies(response?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value);
    // setApiUrl(SEARCH_URL)
  };
  return (
    <main>
      <form
        action=""
        className="flex justify-center p-2"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          placeholder="Search A Movie.."
          className="outline-none border w-4/12 mr-3 text-black text-lg"
        />
        <button type="submit">Search</button>
      </form>
      <div className="flex flex-wrap justify-center">
        <Cards movies={movies} />
      </div>
    </main>
  );
};
export default Main;
