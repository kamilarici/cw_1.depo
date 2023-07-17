import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./ReacipeIndex";
import axios from "axios";
const Meal = () => {
  const [value, setValue] = useState("");
  const [meals, setMeals] = useState();
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const fechData = async () => {
    const request = await axios.get(url);

    setMeals(request.data.meals);
  };
  console.log(meals);
  useEffect(() => {
    fechData();
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search Your Food Recipe</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            tempore unde sed ducimus voluptates illum!
          </h4>
        </div>
        <div className="searchBox">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="search"
              className="search-bar"
              onChange={(e) => setValue(e.target.value)}
            />
            <button>add</button>
          </form>
        </div>
        <div className="container">
          {meals.map((meal) => (
            <MealItem meal={meal} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Meal;
