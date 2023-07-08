import { data } from "../helper/data";
import CardContainer from "./CardContainer";
// console.log(data);
const PlayerCard = () => {
  return (
    <div>
      <input className="input" type="text" />
      <div className="player-div">
        {data.map((item) => (
          <CardContainer {...item} />
        ))}
      </div>
    </div>
  );
};

export default PlayerCard;
