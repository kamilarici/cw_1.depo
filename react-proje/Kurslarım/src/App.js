import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import FilmYear from "./components/FilmYear";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="filmyear" element={<FilmYear />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
