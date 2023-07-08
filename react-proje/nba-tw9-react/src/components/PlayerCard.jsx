import { useState } from "react";
import { data } from "../helper/data";
import CardContainer from "./CardContainer";
// console.log(data);
const PlayerCard = () => {
  const [query, setQuery] = useState("");
  let nameArr = [];
  nameArr = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  return (
    <div>
      <input className="input" type="text" onChange={handleSearch} />
      <div className="player-div">
        {nameArr.map((item) => (
          <CardContainer {...item} />
        ))}
      </div>
    </div>
  );
};

export default PlayerCard;
