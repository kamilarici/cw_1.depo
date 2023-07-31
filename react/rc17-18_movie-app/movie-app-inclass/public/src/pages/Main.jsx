import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Main = ({userNameLogin}) => {
  const [movies, setMovies] = useState()
  const [query, setQuery] = useState()
  const API_KEY = "b1ad040c8b59ee92603839b9fbbe4adf";
  const [apiUrl, setApiUrl] = useState(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`

  const getData = async () => {
    try {
      const response = await axios(`${apiUrl}`)
      setMovies(response?.data?.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [apiUrl])

const handleSubmit = (e) => {
  e.preventDefault();
 query && setApiUrl(SEARCH_URL)
}
  return (
    <main>

      <form action="" className="flex justify-center p-2" onSubmit={handleSubmit} >
        <input type="search" placeholder="Search A Movie.." className="outline-none pl-5 border rounded-2xl border-green-600 w-4/12 mr-3 text-black text-lg focus:border-green-950 focus:bg-gray-300" onChange={(e)=>setQuery(e.target.value.trim())}  required/>
        <button type="submit" className="hover:bg-gray-300 px-3 rounded-xl border border-green-600">Search</button>
      </form>

      <div className="flex flex-wrap justify-center">
        <Cards movies={movies} userNameLogin={userNameLogin}/>
      </div>

    </main>);
};

export default Main;
