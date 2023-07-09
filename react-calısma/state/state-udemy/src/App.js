import { useState } from "react";
import "./App.css";
import Example from "./Example";

function App() {
  const [name, setName] = useState("kml");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["ahmet", "murat"]);
  const [address, setAddress] = useState({ title: "istanbul", zip: 34746 });

  return (
    <div className="App">
      <Example />
      <hr />
      <hr />
      <br />
      {/* //? string ************* */}
      <h1>merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("ahmet")}>click</button>
      <button onClick={() => setAge(33)}>age</button>
      <hr />
      {/* //? array ****************************** */}
      <h2>başlık</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "ayşe"])}>
        Add new friends
      </button>
      <hr />
      <br />
      {/* //? object ***************************************** */}
      <h2>address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress({ ...address, title: "ankara" })}>
        {" "}
        change adres
      </button>
    </div>
  );
}

export default App;
