// import { useState } from "react";

import { useState } from "react";

const CardContainer = (props) => {
  const { name, img, statistics } = props;

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="relative" onClick={handleClick}>
        <img className="card-img" src={img} alt="" />
        <ul className={` ul ${active ? "ulz" : ""}`}>
          <li>🌟{statistics[0]}</li>
          <li>🌟{statistics[1]}</li>
          <li>🌟{statistics[2]}</li>
          <li>🌟{statistics[3]}</li>
        </ul>
      </div>
      <p className=" p-card">{name}</p>
    </div>
  );
};

export default CardContainer;
