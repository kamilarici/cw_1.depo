import { useState } from "react";

function App() {
  //? string state*******
  const [name, setName] = useState("mehmet");
  //? number state*********
  const [age, setAge] = useState(29);
  //? array state********
  const [friends, setFriends] = useState(["ahmet", "murat"]);
  //? object state ********
  const [address, setAddress] = useState({ title: "istanbul", zip: 11556 });
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("ahmet")}> click</button>
      <button onClick={() => setAge(25)}> age</button>
      <hr />
      <br />
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      {/* //? setFriends içine array olarak yeni değer atamadığımız zaman map patlarve dönmez çünkü array olan yere string tanımlamış oluruz ..önceki değerlerin gelmesini de istiyorsak spred operatörü ile çağırmamuz gerekiyor */}
      <button onClick={() => setFriends([...friends, "ayşe"])}>
        add new frends
      </button>

      <hr />
      <br />

      <h2>address</h2>
      <div>
        {address.title}
        {address.zip}
      </div>

      <button
        onClick={() => setAddress({ ...address, title: "ankara", zip: 22222 })}
      >
        new adress
      </button>
    </div>
  );
}
export default App;
