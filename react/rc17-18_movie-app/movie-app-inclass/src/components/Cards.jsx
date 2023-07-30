import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap">
      {movies?.map((movie) => {
        return (
          <div
            key={movie.id}
            className="movie"
            onClick={() =>
              navigate(`/moviedetail/${movie.id}`, { state: movie })
            }
          >
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
              alt=""
            />
            <div className="bg-blue-700 py-5 text-white">
              <h5>{movie?.title}</h5>
            </div>
            <div className="movie-over">
              <h4>Overvieww</h4>
              <p>{movie?.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
