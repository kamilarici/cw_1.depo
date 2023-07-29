function App() {
  return (
    <div className="bg-fuchsia-300 h-screen p-[10px]">
      <h1 className="text-8xl bg-[#ededed]">TailwindCss Kurulum</h1>
      <h1 className="text-3xl font-bold text-center underline">Hello world!</h1>

      <div className="flex gap-3 mt-4">
        <div className="flex flex-col justify-between items-center bg-slate-500 rounded-xl w-3/12 h-[250px]"></div>
        <div className="flex flex-col justify-between items-center bg-slate-500 rounded-xl w-3/12 h-[250px]"></div>
      </div>
    </div>
  );
}

export default App;
