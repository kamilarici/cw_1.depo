import "./app.css";
import SearchHeader from "./SearchHeader";
const handleSubmit = (term) => {
  debugger;
  console.log(term);
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
