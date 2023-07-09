import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRondomCourse() {
  const courseArray = ["batman", "dr", "thor", "black"];
  return courseArray[Math.floor(Math.random() * 4)];
}

function App() {
  const [course, setCourse] = useState([]);
  const handleClick = () => {
    setCourse([...course, getRondomCourse()]);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>kurs ekle</button>
      <div className="flex">
        {course.map((item, index) => {
          return <Course key={index} courseName={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
