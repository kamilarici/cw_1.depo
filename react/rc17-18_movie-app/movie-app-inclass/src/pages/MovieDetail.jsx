import React from "react";

const MovieDetail = () => {
  return (
    <div className="  bg-slate-600  w-12/12 mx-auto py-5 ">
      <h1 className="text-center mb-2 text-3xl">The falh</h1>
      <div className="w-10/12 md:w-3/5 bg-red-500 mx-auto rounded-xl">
        <div className="ratio h-[400px] ratio-16x9">
          <iframe
            class="rounded-xl"
            src="https://www.youtube.com/embed/Y9RfhbH0GEQ?autoplay=1&amp;mute=1"
            title="YouTube video"
            allowfullscreen=""
            __idm_id__="32769"
          ></iframe>
        </div>
      </div>
      <div className="container flex mt-10 mx-auto justify-center">
        <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-300">
          <img
            className="lg:w-1/3 lg:h-[600px] md:rounded-none object-cover rounded-t-lg   h-96 md:rounded-l-lg "
            src="https://image.tmdb.org/t/p/w1280/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg"
            alt=""
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="mb-3 font-medium text-lg">Overview</h2>
              <p className="text-gray-700 text-base mb-4">
                When his attempt to save his family inadvertently alters the
                future, Barry Allen becomes trapped in a reality in which
                General Zod has returned and there are no Super Heroes to turn
                to. In order to save the world that he is in and return to the
                future that he knows, Barry's only hope is to race for his life.
                But will making the ultimate sacrifice be enough to reset the
                universe?
              </p>
            </div>
            <table className="border border-gray-500 ">
              <tr className="border-b-2 border-gray-500 ">
                <td className="p-2">Release date</td>
              </tr>
              <tr className="border-b-2 border-gray-500 ">
                <td className="p-2">Release date</td>
              </tr>
              <tr className="border-b-2 border-gray-500 ">
                <td className="p-2">Release date</td>
              </tr>
              <tr className="border-b-2 border-gray-500 ">
                <td className="p-2">Release date</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
