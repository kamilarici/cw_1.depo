import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

const MovieContext = createContext()

const API_KEY = "b1ad040c8b59ee92603839b9fbbe4adf";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieProvider = ({children}) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies(FEATURED_API)
    }, [])
    

    const getMovies = async(API) => {
      const res = await axios(API)
      setMovies(res.data.results)
    }



const values = {movies,getMovies}

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  )
}

export default MovieProvider;

export const useMovieContext = () => {
  return useContext(MovieContext)
}