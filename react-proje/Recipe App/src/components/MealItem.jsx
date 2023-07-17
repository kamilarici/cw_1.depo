import React from "react";

const MealItem = ({ meal }) => {
  return (
    <>
      <div className="card">
        <img src={meal.strMealThumb} alt="" />
        <h3>{meal.strMeal}</h3>
      </div>
    </>
  );
};

export default MealItem;
