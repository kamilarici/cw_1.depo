import Batman from "./img/batman.jpg";
import Black from "./img/black.jpg";
import Dr from "./img/dr.jpg";
import Thor from "./img/thor.jpg";
import "./Course.css";
const courseMap = {
  Batman,
  Black,
  Dr,
  Thor,
};

const Course = ({ courseName }) => {
  console.log(Dr);
  console.log(courseName);
  return (
    <div className="imgDiv">
      <img className="imgCourse" src={courseMap[courseName]} alt="" />
    </div>
  );
};

export default Course;
