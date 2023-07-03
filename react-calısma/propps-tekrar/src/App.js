import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div>
      <Person
        name="ggggg"
        img="https://cdn.pixabay.com/photo/2023/05/18/18/54/ibex-8003063_640.jpg"
        color="mor"
      />
      <Person
        name="ggggg"
        img="https://cdn.pixabay.com/photo/2023/05/18/18/54/ibex-8003063_640.jpg"
      />
      <Person
        name="gglll"
        img="https://cdn.pixabay.com/photo/2023/05/18/18/54/ibex-8003063_640.jpg"
        color="mor"
      />
      <h1>Hello React</h1>
      <Header />
      <Footer />
      <Content />
    </div>
  );
}

export default App;
