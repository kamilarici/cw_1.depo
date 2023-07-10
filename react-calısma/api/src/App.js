import "./app.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./Api";
import { useState } from "react";
import ListImg from "./components/ListImg";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // debugger;
    // console.log(term);
    //!değer search images içine gider
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <h1>Hello React</h1>
      {/* //! burada search can değerini alır ve fonksiyonun içine term olarak atar */}
      <SearchHeader search={handleSubmit} />
      <ListImg imagesPlaceholder={images} />
    </div>
  );
}

export default App;
