import { useState } from "react";
import { arrowdown } from "../helper/icons";
import { arrowup } from "../helper/icons";

const Question = ({ item }) => {
  const [isClick, setisClick] = useState(false);

  const handleClick = () => {
    setisClick(!isClick);
  };

  return (
    <div className=" question-card  bg-info p-3 border border-danger mt-3 rounded-4">
      <div className="  d-flex  justify-content-between  align-item-center   ">
        <div>
          <h2 className="text-danger">
            {item.id}.{item.question}
          </h2>
        </div>
        <div onClick={handleClick}>{isClick ? arrowup : arrowdown}</div>
      </div>
      {isClick && (
        <div className="">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
