import batman from "./img/batman.jpg";
import black from "./img/black.jpg";
import dr from "./img/dr.jpg";
import thor from "./img/thor.jpg";

const courseMap = {
  batman,
  black,
  dr,
  thor,
};

const Course = ({ courseName }) => {
  return (
    <div className="img-div">
      <img className="img " src={courseMap[courseName]} alt="marvel" />
    </div>
  );
};

export default Course;
