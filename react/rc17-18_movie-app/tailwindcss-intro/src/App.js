function App() {
  return (
    <div className="bg-fuchsia-300 h-screen p-[10px]">
      <h1 className="text-8xl bg-[#ededed]">TailwindCss Kurulum</h1>
      <h1 className="text-3xl font-bold text-center underline">Hello world!</h1>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <div className="flex flex-col justify-between items-center bg-slate-500 rounded-xl w-3/12">
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            alt="sa"
            className="rounded-xl h-[200px] animate-pulse"
          />
          <p className="line-clamp-1 hover:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, fugiat? Eos, temporibus enim animi dolorem laudantium
            aliquid delectus accusantium ratione, odio maiores excepturi
            molestiae laboriosam?
          </p>
        </div>
        <div className="card">
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            alt="sa"
            className="rounded-xl h-[200px] animate-pulse"
          />
          <p className="line-clamp-1 hover:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, fugiat? Eos, temporibus enim animi dolorem laudantium
            aliquid delectus accusantium ratione, odio maiores excepturi
            molestiae laboriosam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
