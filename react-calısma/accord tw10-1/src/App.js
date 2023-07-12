import Header from "./components/Header";
import Question from "./components/Question";
import questions from "./helper/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container card-div ">
        {questions.map((item, i) => (
          <Question key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
