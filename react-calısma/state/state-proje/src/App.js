import Course from "./Course";
import { useState } from "react";
import "./App.css";

function getRandomCourse() {
  const courseArray = ["Dr", "Batman", "Black", "Thor"];
  return courseArray[Math.floor(Math.random() * 4)];
}
function App() {
  const [courses, setCourse] = useState([]);
  const handleClick = () => {
    setCourse([...courses, getRandomCourse()]);
  };
  return (
    <div className="App">
      <button className="btn" onClick={handleClick}>
        Film Ekle
      </button>
      <div className="courseList">
        {courses.map((course, index) => {
          return <Course key={index} courseName={course} />;
        })}
      </div>
    </div>
  );
}

export default App;
