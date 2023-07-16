import { useState } from "react";
import "./app.css";
import healty from "./assets/healty.png";
import over from "./assets/overweight.png";
import under from "./assets/underweight.png";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));
      console.log(bmi);

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are a healthy weight");
      } else {
        setMessage("you are overweiht");
      }
    }
  };
  // ?  bmi kilo aralıkları koşulları
  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = under;
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = healty;
    } else {
      imgSrc = over;
    }
  }
  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="containerr ">
        <h2 className="center">BMI Calculater</h2>
        <form action="" onSubmit={calcBmi}>
          <div>
            <label htmlFor="">weight</label>
            <input
              type="text"
              playcolder="enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">height</label>
            <input
              type="text"
              playcolder="enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btnn " type="submit">
              Submit
            </button>
            <button className="btnn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3> Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
          <div className="img-container">
            <img src={imgSrc} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
