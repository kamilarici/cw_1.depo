import User from "./components/User";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <User name="mehmet" surname="seven" isLoggedIn={true} age={29} />
      <h1></h1>
    </div>
  );
}

export default App;
