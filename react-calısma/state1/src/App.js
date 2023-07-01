import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const handlClick = () => {
    setValue(value + 1);
  };
  return (
    <div className="App">
      <button onClick={handlClick}>Kurs Ekle</button>
      {/* <button
        onClick={() => {
          console.log("cannn");
        }}
      >
        Kurs Ekle
      </button> */}
      <div> Kurs Sayısı: {value}</div>
    </div>
  );
}

export default App;
