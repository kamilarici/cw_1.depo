import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {

  const API_KEY = "b1ad040c8b59ee92603839b9fbbe4adf";
  const { id } = useParams()
  const [moviedetail, setMoviedetail] = useState({
    details: "",
    key: ""
  })

  const DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  const VIDEO_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`

  const getData = async () => {
    try {
      const response = await axios(DETAIL_URL)
      const video = await axios(VIDEO_URL)
      setMoviedetail({ ...moviedetail, details: response?.data, key: video.data.results[0].key })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const { title, overview, poster_path, vote_average, vote_count
    , release_date } = moviedetail.details

  return (
    <div className="bg-slate-600">

    <div className=" container px-10 mx-auto py-5">

      <div className=" container mx-auto w-12/12  py-5 ">

        <h1 className="text-center mb-5 text-4xl ">{title}</h1>

        <div className="w-8/12 md:w-3/5 mx-auto">
          <div className="ratio h-[400px] ratio-16x9">
            <iframe className="rounded-xl" src={`https://www.youtube.com/embed/${moviedetail.key}`} title="YouTube video" allowFullScreen __idm_id__="32769"></iframe>
          </div>
        </div>

        <div className="container flex justify-center mt-12">

          <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 shadow-lg">
            <img className="lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg " src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt="" />
            <div className="container p-6 flex flex-col justify-between">
              <div>
                <h2 className="mb-3 font-medium text-lg">Overview</h2>
                <p className="text-gray-700 text-base mb-4">{overview}</p>
              </div>
              <table className="border border-gray-500 ">
                <tbody>
                  <tr className="border-b-2 border-gray-500 ">
                    <td className="p-2">Release Date : {release_date}</td>
                  </tr>
                  <tr className="border-b-2 border-gray-500 ">
                    <td className="p-2">Rate : {vote_average}</td>
                  </tr>
                  <tr className="border-b-2 border-gray-500 ">
                    <td className="p-2">Total Vote : {vote_count}</td>
                  </tr>
                  <tr className="border-b-2 border-gray-500 ">
                    <td className="p-2 text-blue-800 underline underline-offset-4">
                      <Link to={-1}>Go Back</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

    </div>
    </div>

  );
};

export default MovieDetail;
