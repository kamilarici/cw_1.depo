import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const MovieContext = createContext();

const API_KEY = "1:233849661111:web:26993405f83f5c8fdc4f32";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = async (API) => {
    const res = await axios.get(API);
  };

  const values = {
    movies,
    setMovies,
  };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;

export const useMovieContext = () => {
  return useContext(MovieContext);
};
