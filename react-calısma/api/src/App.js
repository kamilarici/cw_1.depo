import "./app.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./Api";

const handleSubmit = (term) => {
  // debugger;
  console.log(term);
  searchImages(term);
};

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;
