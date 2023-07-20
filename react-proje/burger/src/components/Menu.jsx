import React from "react";
import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";
const Menu = () => {
  console.log(Data);
  return (
    <div className="menu">
      <h1 className="menu-title">Burgerlerimiz</h1>
      <div className="menu-list">
        {Data.map((item, i) => {
          return (
            <MenuItem
              key={i}
              image={item.image}
              name={item.name}
              content={item.content}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
