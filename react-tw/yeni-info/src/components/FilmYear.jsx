import React from "react";

const FilmYear = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div>
          <button
            type="button"
            className="btn  border-0 border-bottom border-info fs-4 fw-bold text-secondary"
            key={item.id}
          >
            {item.date}
          </button>
          <img src={item.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default FilmYear;
