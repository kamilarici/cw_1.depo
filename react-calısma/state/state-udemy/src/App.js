import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("kml");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["ahmet", "murat"]);

  return (
    <div className="App">
      {/* //? string ************* */}
      <h1>merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("ahmet")}>click</button>
      <button onClick={() => setAge(33)}>age</button>
      <hr />
      //? array ******************************
      <h2>başlık</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "ayşe"])}>
        Add new friends
      </button>
    </div>
  );
}

export default App;
