import React from "react";
const Main = () => {
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
        <div className="movie">
          <img
            src="https://image.tmdb.org/t/p/w1280/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
            alt=""
          />
          <div className="bg-blue-700 py-5 text-white">
            <h5>The Flash</h5>
          </div>
          <div className="movie-over">
            <h4>Overvieww</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia est
              dicta, nemo alias quis ratione placeat. Consequatur ut repellat
              sunt?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
