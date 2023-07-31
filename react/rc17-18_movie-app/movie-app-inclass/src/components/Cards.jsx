// import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";

const Cards = ({ movies, userNameLogin }) => {
  const navigate = useNavigate();

  return (
    <>
      {movies?.map((movie) => {
        const { vote_average } = movie;
        return (
          <div
            key={movie.id}
            className="movie"
            onClick={() =>
              navigate(`moviedetail/${movie.id}`, { state: movie })
            }
          >
            {/* <LazyLoad height={200} offset={100} once> */}
            <img
              // loading="lazy"
              src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
              alt=""
            />
            {/* </LazyLoad> */}
            <div className="bg-blue-700 h-16   text-white flex items-center justify-between align-baseline p-1 ">
              <h5>{movie?.title}</h5>
              {userNameLogin && (
                <span
                  className={`tag  ${
                    vote_average < 6
                      ? "red"
                      : vote_average < 8
                      ? "orange"
                      : "green"
                  }`}
                >
                  {vote_average}
                </span>
              )}
            </div>

            <div className="movie-over">
              <h4>Overvieww</h4>
              <p>{movie?.overview}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
