import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
const Main = () => {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState();
  const API_KEY = "405cd9fb67e60c3e2feae1872a93ac53";
  const [apiUrl, setApiUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
  );
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const getData = async () => {
    try {
      const response = await axios(`${apiUrl}`);
      setMovies(response?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [apiUrl]);
  const handleSubmit = (e) => {
    e.preventDefault();
    query && setApiUrl(SEARCH_URL);
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
          onChange={(e) => setQuery(e.target.value.trim())}
          required
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
