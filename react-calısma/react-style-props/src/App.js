import "./App.css";
import Nav from "./conponents/Nav";
import User from "./conponents/User";

function App() {
  return (
    <div className="container">
      <h1 className="header">Hello React</h1>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <hr />
      <Nav title="user app 4" />
      <hr />
      <User
        name="kamil arici"
        salary="10000"
        department="bilisim"
        salary="15000"
      />
      <User name="oguz kalkan" department="backend" />
      <User name="bunyamin deri" salary="12000" department="dewops" />
    </div>
  );
}

export default App;
